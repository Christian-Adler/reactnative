// import {useState} from "react";

import { StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    padding: 8,
    margin: 80,
  },
  goalText: {
    color: "#fff",
  },
});
