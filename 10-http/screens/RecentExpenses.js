import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import { ExpensesContext } from "../store/expenses-context";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expensesCtx.setExpenses(expenses);
    };

    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const today = new Date();
  const date7DaysAgo = getDateMinusDays(today, 7);
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
