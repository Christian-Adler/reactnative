import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Fragment } from "react";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <View style={styles.rootScreen}>
        <StartGameScreen />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});
