import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setGoals((prevState) => [...prevState, enteredGoalText]);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {goals.map((goal) => (
          <View key={goal} style={styles.goalItem}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: "column",
    flex: 1,
  },

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

  goalsContainer: {
    flex: 5,
  },

  goalItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    padding: 8,
    margin: 8,
  },
  goalText: {
    color: "#fff",
  },
});
