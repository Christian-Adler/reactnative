import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <CategoriesScreen />
    </Fragment>
  );
}

const styles = StyleSheet.create({});
