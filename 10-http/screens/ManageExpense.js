import { StyleSheet, View } from "react-native";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { storeExpense } from "../util/http";

const ManageExpense = ({ navigation, route }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const expenseCtx = useContext(ExpensesContext);

  let selectedExpense = expenseCtx.expenses.find(
    (exp) => exp.id === editedExpenseId
  );
  if (!isEditing)
    selectedExpense = {
      amount: null,
      date: new Date(),
      description: "",
    };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };
  const cancelHandler = () => {
    navigation.goBack();
  };
  const confirmHandler = (expenseData) => {
    if (isEditing) expenseCtx.updateExpense(editedExpenseId, expenseData);
    else {
      expenseCtx.addExpense(expenseData);
      storeExpense(expenseData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.view}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={"trash"}
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary800,
    padding: 24,
    justifyContent: "flex-start",
  },

  deleteContainer: {
    flex: 1,
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
