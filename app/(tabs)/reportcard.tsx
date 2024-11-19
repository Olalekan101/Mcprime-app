import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Linking, PermissionsAndroid, ToastAndroid, Alert, Platform, Button } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import RNFS from 'react-native-fs';
import LottieView from 'lottie-react-native';




export default function TabFourScreen() {
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [webViewUri, setWebViewUri] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const handleReload = () => {
    setIsError(false);
    setIsLoading(true);
  };

  const getCurrentSessionAndTerm = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // JavaScript months are 0-indexed

    let term = '';
    let session = '';

    if (month >= 9 || month <= 12) {
      // September to December
      term = '1st Term';
      session = `${year}/${year + 1}`;
    } else if (month >= 1 && month <= 3) {
      // January to March
      term = '2nd Term';
      session = `${year - 1}/${year}`;
    } else if (month >= 4 && month <= 7) {
      // April to July
      term = '3rd Term';
      session = `${year - 1}/${year}`;
    }

    return `${session} - ${term}`;
  };

  const academicSession = getCurrentSessionAndTerm();

  const handleShouldStartLoadWithRequest = (request:any) => {
    const url = request.url;

    // Check if the URL is a download link by inspecting the URL pattern or headers
    if (url.endsWith('.pdf') || url.endsWith('.zip') || url.includes('download')) {
      // If it is a download link, open it in the default browser
      Linking.openURL(url).catch((err) =>
        Alert.alert("Error", "Failed to open URL: " + err.message)
      );
      return false; // Prevent the WebView from loading the download URL
    }
    return true; // Allow the WebView to load other URLs
  };


  // List of available classes (customize this list as per your needs)
  const classOptions = [
    { label: 'Cache', value: 'Cache' },
    { label: 'Nursery 1', value: 'Nursery 1' },
    { label: 'Nursery 2', value: 'Nursery 2' },
    { label: 'Primary 1', value: 'Primary 1' },
    { label: 'Primary 2', value: 'Primary 2' },
    { label: 'Primary 3', value: 'Primary 3' },
    { label: 'Primary 4', value: 'Primary 4' },
    { label: 'Primary 5', value: 'Primary 5' },
  ];

  // Handle class click
  const handleClassClick = (classValue:any) => {
    setSelectedClass(classValue);

    // Set WebView URI based on the selected class
    switch (classValue) {
      case 'Cache':
        setWebViewUri('https://sites.google.com/view/mcprime-cache-report-card/report-card');
        break;
      case 'Nursery 1':
        setWebViewUri('https://sites.google.com/view/mcprime-nursery-1-report-card/report-card');
        break;
      case 'Nursery 2':
        setWebViewUri('https://sites.google.com/view/mcprime-nursery-2-report-card/report-card');
        break;
      case 'Primary 1':
        setWebViewUri('https://sites.google.com/view/mcprime-primary-1-report-card/report-card');
        break;
      case 'Primary 2':
        setWebViewUri('https://sites.google.com/view/mcprime-primary-2-report-card/report-card');
        break;
      case 'Primary 3':
        setWebViewUri('https://sites.google.com/view/mcprime-primary-3-report-card/report-card');
        break;
      case 'Primary 4':
        setWebViewUri('https://sites.google.com/view/mcprime-primary-4-report-card/report-card');
        break;
      case 'Primary 5':
        setWebViewUri('https://sites.google.com/view/mcprime-primary-5-report-card/report-card');
        break;
      default:
        setWebViewUri('');
        break;
    }

    setIsWebViewVisible(true); // Show the WebView
  };

  // Handle going back to class list
  const handleGoBack = () => {
    setIsWebViewVisible(false);
    setSelectedClass('');
    setWebViewUri('');
  };

  return (
    <View style={styles.container}>
      {!isWebViewVisible ? (
        // Display class list
        <View style={styles.classListContainer}>
           <View style={styles.loadingContainer}>
            <LottieView
              // source={Lottieloading} // Replace with your Lottie file path
              source={require('@/assets/report card.json')} // Replace with your Lottie file path
              autoPlay
              loop
              style={{
                width: 200,
                height: 200,
                // backgroundColor: '#eee',
              }}
            />
            </View>
            <Text style={styles.title}>{academicSession} Report Card</Text>
            <Text style={styles.titlex}>Please select a class.</Text>
          <ScrollView contentContainerStyle={styles.classGrid}>
            {classOptions.map((classOption) => (
              <TouchableOpacity
                key={classOption.value}
                style={styles.classButton}
                onPress={() => handleClassClick(classOption.value)}
              >
                <Text style={styles.classButtonText}>{classOption.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      ) : (
        // Show WebView when a class is selected
            <View style={styles.webViewContainer}>
            {isError ? (
              <View style={styles.errorContainer}>
                 <Text style={styles.title}>Failed to load. Please check your connection.</Text>
      <TouchableOpacity
                style={styles.classButton}
                onPress={handleReload}
              >
                <Text style={styles.classButtonText}>Application Form</Text>
              </TouchableOpacity>
              </View>
            ) : (
              <>
               <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
            <Text style={styles.classButtonText}>Go Back</Text>
          </TouchableOpacity>
          <WebView
            style={styles.webview}
            source={{ uri: webViewUri }}
            cacheMode='LOAD_CACHE_ELSE_NETWORK'
            onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
            startInLoadingState
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            onError={() => setIsError(true)}

            
          />
              </>
            )}
          </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FAF7F0',
    backgroundColor: '#1e2328', // Black background
  },
  classListContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 'light',
    // marginBottom: 4,
    color: '#FAF7F0',
    marginTop:10,
    fontStyle:'italic'
  },
  titlex: {
    fontSize: 12,
    fontWeight: 'light',
    marginBottom: 4,
    color: '#FAF7F0',
    // marginTop:10,
    fontStyle:'italic'
  },
  classGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 'auto',
  },
  classButton: {
    backgroundColor: '#fff', // Black background
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 5,
    width: '40%', // Adjust the width for grid layout
    alignItems: 'center',
    justifyContent: 'center',
  },
  classButtonText: {
    color: '#000', // White text
    fontSize: 14,
    textAlign: 'center',
  },
  webViewContainer: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  goBackButton: {
    backgroundColor: '#fff', // Black background
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 5,
    width: '40%', // Adjust the width for grid layout
    marginTop: 10, // Space between button and WebView
    marginBottom: 10, // Space between button and WebView
    alignSelf: 'center', // Center the button
  },
  goBackButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  webview: {
    flex: 1,
    width: '100%',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
