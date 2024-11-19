import { Button, StyleSheet,Alert, PermissionsAndroid, Platform, ToastAndroid, Linking, Share, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import Constants from 'expo-constants';
import { useState } from 'react';
import RNFS from 'react-native-fs';
import LottieView from 'lottie-react-native';


export default function TabOneScreen() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const handleReload = () => {
    setIsError(false);
    setIsLoading(true);
  };

  

  return( 
    <View style={{ flex: 1 }}>
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
        <WebView
          style={styles.webview}
          source={{ uri: 'https://sites.google.com/view/mcprime-school-app/home' }}
          onError={() => setIsError(true)}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          cacheMode="LOAD_CACHE_ELSE_NETWORK"
          startInLoadingState
          
        />
        {/* <View style={styles.containerxx}>
        <Text style={styles.classButtonText}>Go Back</Text>
          <Text></Text>
      <Button  title="Share Performance Portal" onPress={shareContent} />
    </View> */}
      </>
    )}
  </View>
  );
}

const styles = StyleSheet.create({
  classButtonText: {
    color: '#000', // White text
    fontSize: 14,
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerxx: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e2328', // Black background
    borderColor:'#eee',
    borderTopWidth:0.5

  },
  webview: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
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
  }
});
