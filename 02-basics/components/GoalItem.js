// import {useState} from "react";

import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  // console.log(props);
  const pressHandler = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
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
