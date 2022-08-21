import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { StyleSheet } from "react-native";

const RecentExpenses = (props) => {
  return <ExpensesOutput expensesPeriod={"Last 7 Days"} />;
};

export default RecentExpenses;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  text: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
