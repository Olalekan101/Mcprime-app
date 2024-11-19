import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { WebView } from 'react-native-webview';
import { useState } from 'react';


export default function TabTwoScreen() {
  const [isError, setIsError] = useState(false);

  const handleReload = () => {
    setIsError(false);
  };
  return (
    <View style={{ flex: 1 }}>
    {isError ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load page. Please check your connection.</Text>
        <Button title="Retry" onPress={handleReload} />
      </View>
    ) : (
      <WebView
      style={styles.webview}
      source={{ uri: 'https://sites.google.com/view/mcprime-staff/staff-section' }}
      cacheMode='LOAD_CACHE_ELSE_NETWORK'
    />
    )}
   </View>
   
  );
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
