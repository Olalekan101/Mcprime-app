import { Button, StyleSheet,Alert, PermissionsAndroid, Platform, ToastAndroid, Linking, Share, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import LottieView from 'lottie-react-native';


export default function TabFiveScreen() {

  const shareContent = async () => {
    try {
      const result = await Share.share({
        message: `Hello Parents/Guardians,
      
      We are pleased to share the Online Score Sheet, a convenient tool to track your ward's performance as the term progresses.
      
      Stay updated and engaged with their academic journey!
      
      Access it here: https://sites.google.com/view/mcprime-online-score-sheet/home`,
        title: 'Online Score Sheet',
      });
      
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
          console.log('Shared with activity type:', result.activityType);
        } else {
          // Shared
          // Alert.alert('Success', 'Content shared successfully!');
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
        Alert.alert('Cancelled', 'Share was cancelled.');
      }
    } catch (error:any) {
      Alert.alert('Error', 'An error occurred while sharing: ' + error.message);
    }
  };

  const shareContentApplication = async () => {
    try {
      const result = await Share.share({
        message: `Hello Parents/Guardians,
      
      We are excited to share the mcPrime Application Form, designed to make student registration simple and convenient.
      
      Easily register your ward for the upcoming academic term!
      
      Access the form here: https://sites.google.com/view/mcprime-application-form/home`,
        title: 'mcPrime Application Form',
      });
      
      
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
          console.log('Shared with activity type:', result.activityType);
        } else {
          // Shared
          // Alert.alert('Success', 'Content shared successfully!');
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
        Alert.alert('Cancelled', 'Share was cancelled.');
      }
    } catch (error:any) {
      Alert.alert('Error', 'An error occurred while sharing: ' + error.message);
    }
  };

  const shareContentAsset = async () => {
    try {
      const result = await Share.share({
        message: `Hello Staff,
      
      We are pleased to share the McPrime Assets folder, which contains the school's APK app and other essential resources.
      
      Access and download the materials you need here:  
      https://drive.google.com/drive/folders/1bcj6xcf2OE7eIIZ6We7XxXy-qGmHIIVj?usp=drive_link`,
        title: 'McPrime Assets',
      });
      
      
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
          console.log('Shared with activity type:', result.activityType);
        } else {
          // Shared
          // Alert.alert('Success', 'Content shared successfully!');
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
        Alert.alert('Cancelled', 'Share was cancelled.');
      }
    } catch (error:any) {
      Alert.alert('Error', 'An error occurred while sharing: ' + error.message);
    }
  };

  const shareContentWebsite = async () => {
    try {
      const result = await Share.share({
        message: `Hello Staff,
      
      We are pleased to share the McPrime Website Portal, providing easy access to the school's management system and resources.
      
      Access the web version of the portal here:  
      https://sites.google.com/view/mcprime/home`,
        title: 'McPrime Website Portal',
      });
      
      
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
          console.log('Shared with activity type:', result.activityType);
        } else {
          // Shared
          // Alert.alert('Success', 'Content shared successfully!');
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
        Alert.alert('Cancelled', 'Share was cancelled.');
      }
    } catch (error:any) {
      Alert.alert('Error', 'An error occurred while sharing: ' + error.message);
    }
  };

  

  return( 
    <View style={{ flex: 1 }}>
      <>

        <View style={styles.containerxx}>
        <LottieView
              // source={Lottieloading} // Replace with your Lottie file path
              source={require('@/assets/share.json')} // Replace with your Lottie file path
              autoPlay
              loop
              style={{
                width: 200,
                height: 100,
                // backgroundColor: '#eee',
              }}
            />
        <Text style={styles.title}>A seamless way for parents/guardians to track their ward's progress using their student ID. Click the button below to share this with them.</Text>
      <TouchableOpacity
                style={styles.classButton}
                onPress={shareContent}
              >
                <Text style={styles.classButtonText}>Share Performance Portal</Text>
              </TouchableOpacity>

        <Text style={styles.title}>Click below to share the application form for prospective students to register.</Text>
      <TouchableOpacity
                style={styles.classButton}
                onPress={shareContentApplication}
              >
                <Text style={styles.classButtonText}>Application Form</Text>
              </TouchableOpacity>

        <Text style={styles.title}>Here is the link to the web version of mcPrime School Management. This platform is provided to ensure easy access for all staff members.</Text>
      <TouchableOpacity
                style={styles.classButton}
                onPress={shareContentWebsite}
              >
                <Text style={styles.classButtonText}>Mcprime Web Version</Text>
              </TouchableOpacity>

        <Text style={styles.title}>Share this with staff to download the school's APK app and access other important assetss</Text>
      <TouchableOpacity
                style={styles.classButton}
                onPress={shareContentAsset}
              >
                <Text style={styles.classButtonText}>Mcprime App Download Link</Text>
              </TouchableOpacity>
    </View>
      </>
  </View>
  );
}

const styles = StyleSheet.create({
  classButton: {
    backgroundColor: '#fff', // Black background
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 5,
    // width: '40%', // Adjust the width for grid layout
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e2328', // Black background
    borderColor:'#eee',
    borderTopWidth:0.5,
    padding:5

  },
  webview: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'light',
    // marginBottom: 4,
    color: '#FAF7F0',
    marginTop:10,
    fontStyle:'italic',
    textAlign:'center',
    marginBottom:6
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
