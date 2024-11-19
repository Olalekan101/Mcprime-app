import { StatusBar } from 'expo-status-bar';
import { Button, Platform, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import WebView from 'react-native-webview';
import LottieView from 'lottie-react-native';
import { useState } from 'react';

export default function ModalScreen() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  const handleReload = () => {
    setIsError(false);
    setIsLoading(true);
  };

  return (
    <View style={{ flex: 1 }}>
    {isError ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load page. Please check your connection.</Text>
        <Button title="Retry" onPress={handleReload} />
      </View>
    ) : (
      <>
        {isLoading && (
          <View style={styles.loadingContainer}>
            <LottieView
              source={require('@/assets/loading.json')} // Replace with your Lottie file path
              autoPlay
              loop
              style={{
                width: 300,
                height: 300,
                backgroundColor: '#eee',
              }}
            />
          </View>
        )}
        <WebView
          style={styles.webview}
          source={{ uri: 'https://sites.google.com/view/mcprime-subscription/home' }}
          onError={() => setIsError(true)}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          cacheMode="LOAD_CACHE_ELSE_NETWORK"
          startInLoadingState

        />
      </>
    )}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
  webview: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
