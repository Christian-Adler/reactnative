import axios from "axios";

const rootURL =
  "https://react-native-38ace-default-rtdb.europe-west1.firebasedatabase.app/";

export const storeExpense = (expenseData) => {
  axios.post(`${rootURL}expenses.json`, expenseData);
};
