import { StatusBar } from "expo-status-bar";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { useEffect, useState } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  // send/receive Push Notifications setup https://docs.expo.dev/push-notifications/push-notifications-setup/
  const [expoPushToken, setExpoPushToken] = useState(); // Own token
  useEffect(() => {
    const registerForPushNotificationsAsync = async () => {
      if (!Device.isDevice) {
        Alert.alert(
          "Device required",
          "Must use physical device for Push Notifications"
        );
        return;
      }

      const { status: actualPermissionStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = actualPermissionStatus;
      if (finalStatus !== "granted") {
        const { status: requestedPermissionStatus } =
          await Notifications.requestPermissionsAsync();
        finalStatus = requestedPermissionStatus;
      }
      if (finalStatus !== "granted") {
        Alert.alert(
          "Permission required",
          "Failed to get push token for push notification!"
        );
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
      setExpoPushToken(token);

      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.DEFAULT,
          lightColor: "#00e1ff",
        });
      }
    };
    registerForPushNotificationsAsync();
  }, []);

  // register on Notifications
  useEffect(() => {
    // Auf Notification hoeren, wenn App geoeffnet ist - der User muss nicht auf die Notification klicken.
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("NOTIFICATION RECEIVED");
        console.log(notification);
        const data = notification.request.content.data;
        console.log(data);
      }
    );

    // User has to respond (tab) on the notification
    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log("NOTIFICATION RESPONSE RECEIVED");
        console.log(response);
        const data = response.notification.request.content.data;
        console.log(data);
      }
    );

    return () => {
      subscription.remove();
      subscription2.remove();
    };
  }, []);

  const scheduleNotificationHandler = async () => {
    Notifications.scheduleNotificationAsync({
      content: {
        // https://docs.expo.dev/versions/latest/sdk/notifications/#notificationcontentinput
        title: "My first local notification",
        subtitle: "My first subtitle for notification",
        body: "This is the body of the notification!",
        data: { userName: "Chris" }, // data to handle when using this notification - not direct visible to the user
      },
      trigger: {
        // https://docs.expo.dev/versions/latest/sdk/notifications/#notificationtriggerinput
        seconds: 5,
      },
    });
  };

  const sendPushNotificationHandler = async () => {
    const message = {
      to: expoPushToken, // Token of the target device
      sound: "default",
      title: "Test - from Device",
      body: "And here is the body!",
      data: { someData: "goes here" },
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title={"Schedule Notification"}
        onPress={scheduleNotificationHandler}
      />
      <Text>-</Text>
      <Button
        title={"Send Push Notification"}
        onPress={sendPushNotificationHandler}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
