import { Button, FlatList, StyleSheet, View } from "react-native";
import { Fragment, useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setGoals((prevState) => [
      ...prevState,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setGoals((oldState) => oldState.filter((goal) => goal.id !== id));
  };

  const renderGoal = (itemData) => {
    return (
      <GoalItem
        text={itemData.item.text}
        onDeleteItem={deleteGoalHandler}
        id={itemData.item.id}
      />
    );
  };

  return (
    <Fragment>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#8856ce"
          onPress={startAddGoalHandler}
        />
        {
          <GoalInput
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}
            visible={modalIsVisible}
          />
        }
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={renderGoal}
            keyExtractor={(item /* , index */) => item.id}
          />
        </View>
      </View>
    </Fragment>
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
