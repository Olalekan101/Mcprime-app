import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function TabThreeScreen() {
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [webViewUri, setWebViewUri] = useState('');

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
        setWebViewUri('https://sites.google.com/view/mcprime-cache-score-sheet/score-sheets');
        break;
      case 'Nursery 1':
        setWebViewUri('https://example.com/nursery1');
        break;
      case 'Nursery 2':
        setWebViewUri('https://example.com/nursery2');
        break;
      case 'Primary 1':
        setWebViewUri('https://example.com/primary1');
        break;
      case 'Primary 2':
        setWebViewUri('https://example.com/primary2');
        break;
      case 'Primary 3':
        setWebViewUri('https://example.com/primary3');
        break;
      case 'Primary 4':
        setWebViewUri('https://example.com/primary4');
        break;
      case 'Primary 5':
        setWebViewUri('https://example.com/primary5');
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
          <Text style={styles.title}>Select a Class</Text>
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
          <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
            <Text style={styles.classButtonText}>Go Back</Text>
          </TouchableOpacity>
          <WebView
            style={styles.webview}
            source={{ uri: webViewUri }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  classListContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
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
});
