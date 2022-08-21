import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = (props) => {
  const expensesCtx = useContext(ExpensesContext);

  const today = new Date();
  const date7DaysAgo = getDateMinusDays(today, 7);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    return expense.date <= date7DaysAgo;
  });

  return (
    <ExpensesOutput expensesPeriod={"Last 7 Days"} expenses={recentExpenses} />
  );
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
