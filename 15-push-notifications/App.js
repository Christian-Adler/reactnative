import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import * as Notifications from "expo-notifications";

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
  const scheduleNotificationHandler = async () => {
    Notifications.scheduleNotificationAsync({
      content: {
        // https://docs.expo.dev/versions/latest/sdk/notifications/#notificationcontentinput
        title: "My first local notification",
        subtitle: "My first subtitle for notification",
        body: "This is the body of the notification!",
        data: { userName: "Chris" }, // data to handle when using this notification
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
