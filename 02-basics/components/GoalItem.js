// import {useState} from "react";

import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  // console.log(props);
  const pressHandler = () => {
    props.onDeleteItem(props.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        // android_ripple={{ color: "#29104b" }} // android only
        style={({ pressed }) => pressed && styles.pressedItem} // ios & android
        onPress={pressHandler}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    margin: 80,
    padding: 4,
  },
  pressedItem: { opacity: 0.5, backgroundColor: "#ff0000" },
  goalText: {
    color: "#fff",
    padding: 8,
  },
});
