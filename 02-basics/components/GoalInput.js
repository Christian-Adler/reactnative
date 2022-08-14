import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };

  const buttonPressHandler = () => {
    if (enteredGoalText.trim().length > 0) {
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your goal!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={buttonPressHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    maxHeight: 150,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    flex: 1,
    marginRight: 8,
    padding: 8,
  },
});
