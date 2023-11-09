import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    GetFcmToken()
  }
}

async function GetFcmToken(){
    let fcmToken =  await AsyncStorage.getItem("fcmToken")
    console.log("old fcmToken ==> ",fcmToken)
    try {
        const fcmToken = await messaging().getToken()
        if(fcmToken){
            console.log("new fcmToken ==> ",fcmToken)
            await AsyncStorage.setItem("fcmToken",fcmToken)
        }
    } catch (error) {
        console.log("err fcmToken ==> ",err)
    }
}

export const NotificationListener = ()=>{
    // Assume a message-notification contains a "type" property in the data payload of the screen to open

    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
      });

      // Check whether an initial notification is available
    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

    messaging().onMessage(async remoteMessage=>{
        console.log('notification on foreground ==> ',remoteMessage)
    })
}