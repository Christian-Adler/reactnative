import axios from "axios";

const rootURL =
  "https://react-native-38ace-default-rtdb.europe-west1.firebasedatabase.app/";

export const storeExpense = (expenseData) => {
  axios.post(`${rootURL}expenses.json`, expenseData);
};

export const fetchExpenses = async () => {
  const response = await axios.get(`${rootURL}expenses.json`);
  const expenses = [];
  const responseData = response.data;
  for (const key of Object.keys(responseData)) {
    const data = responseData[key];
    const expenseObj = {
      id: key,
      amount: data.amount,
      date: new Date(data.date),
      description: data.description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};
