import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { StyleSheet } from "react-native";
import { useContext, useEffect } from "react";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import { ExpensesContext } from "../store/expenses-context";

const RecentExpenses = (props) => {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    };

    getExpenses();
  }, []);

  const today = new Date();
  const date7DaysAgo = getDateMinusDays(today, 7);
  console.log(expensesCtx.expenses);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    return expense.date > date7DaysAgo;
  });

  return (
    <ExpensesOutput
      expensesPeriod={"Last 7 Days"}
      fallbackText={"No expenses registered for the last 7 days."}
      expenses={recentExpenses}
    />
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
