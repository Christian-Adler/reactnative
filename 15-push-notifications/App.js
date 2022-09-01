import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

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
  console.log("APP RENDER");
  useEffect(() => {
    console.log("In useEffect");
    // Auf Notification hoeren, wenn App geoeffnet ist - der User muss nicht auf die Notification klicken.
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("NOTIFICATION RECEIVED");
        console.log(notification);
        const userName = notification.request.content.data.userName;
        console.log(userName);
      }
    );

    // User has to respond (tab) on the notification
    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log("NOTIFICATION RESPONSE RECEIVED");
        console.log(response);
        const userName = response.notification.request.content.data.userName;
        console.log(userName);
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

  return (
    <View style={styles.container}>
      <Button
        title={"Schedule Notification"}
        onPress={scheduleNotificationHandler}
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
