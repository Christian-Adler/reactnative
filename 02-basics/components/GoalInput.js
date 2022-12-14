import { useEffect, useRef, useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

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

  // Autofocus and show keyboard
  const inputRef = useRef();
  const visible = props.visible;
  useEffect(() => {
    const timeout = setTimeout(() => {
      // console.log("current: ", inputRef.current);
      inputRef.current?.blur();
      inputRef.current?.focus();
    }, 100);
    return () => clearTimeout(timeout);
  }, [visible]);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          autoFocus={true}
          ref={inputRef}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={buttonPressHandler}
              color="#5e0acc"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: { width: 100, height: 100, margin: 20 },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    // flex: 1,
    width: "100%",
    // marginRight: 8,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: "10%",
    minWidth: 150,
    marginHorizontal: 8,
  },
});
