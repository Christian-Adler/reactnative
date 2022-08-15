import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Fragment } from "react";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <StartGameScreen />
    </Fragment>
  );
}

const styles = StyleSheet.create({});
