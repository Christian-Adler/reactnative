import { FlatList, StyleSheet, View } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setGoals((prevState) => [
      ...prevState,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = () => {
    console.log("DELETE");
  };

  const renderGoal = (itemData) => {
    return (
      <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} />
    );
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={renderGoal}
          keyExtractor={(item /* , index */) => item.id}
        />
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

  goalsContainer: {
    flex: 5,
  },
});
