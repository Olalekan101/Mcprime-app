import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Alert, View, ActivityIndicator,Text } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
      authenticateUser();
    }
  }, [loaded]);

  const authenticateUser = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !isEnrolled) {
      Alert.alert("Authentication Error", "Device doesn't support biometric authentication.");
      setIsLoading(false);
      setIsAuthenticated(true);
      return;
    }

    const authResult = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate to access the app',
    });

    if (authResult.success) {
      setIsAuthenticated(true);
    } else {
      Alert.alert(
        "Authentication Failed",
        "Please try again.",
        [
          {
            text: 'Try Again',
            onPress: () => authenticateUser(), // Retry authentication if user presses "Try Again"
          },
        ],
        { cancelable: false }
      );
    }
    setIsLoading(false);
  };

  if (!loaded || isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#1e2328' }}>
        <Text style={{fontSize: 24,fontWeight: 'light',color: '#FAF7F0'}}>Mc Prime Academy
        </Text>
        <Text style={{fontSize: 12,fontWeight: 'light',color: '#FAF7F0'}}>SMS
        </Text>
        {/* <ActivityIndicator size="large" color="#0000ff" /> */}
      </View>
    );
  }

  return isAuthenticated ? <RootLayoutNav /> : null;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DarkTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false ,headerTintColor:'#EEEEEE'}} />
        <Stack.Screen name="1frame" options={{ presentation: 'modal', headerShown: true ,headerTintColor:'#1e2328',title:'1Frame SMS',statusBarBackgroundColor:'#1e2328'}} />
      </Stack>
    </ThemeProvider>
  );
}
