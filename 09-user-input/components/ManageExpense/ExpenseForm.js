import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { GlobalStyles } from "../../constants/styles";
import { useState } from "react";
import Button from "../UI/Button";

const ExpenseForm = ({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
}) => {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues?.amount?.toString() || "",
    date: defaultValues?.date.toISOString().slice(0, 10) || "",
    description: defaultValues?.description || "",
  });

  const inputChangedHandler = (inputIdentifier, entered) => {
    setInputValues((prevState) => {
      return { ...prevState, [inputIdentifier]: entered };
    });
  };
  const submitHandler = () => {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    onSubmit(expenseData);
  };

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label={"Date"}
          textInputConfig={{
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputValues.date,
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label={"Description"}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
          multiline: true,
          autoCorrect: false,
          autoCapitalize: "sentences",
        }}
      />
      <View style={styles.buttonContainer}>
        <Button mode={"flat"} onPress={onCancel} style={styles.buttonStyle}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.buttonStyle}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  view: {
    // flex: 1,
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 40,
  },
  title: {
    color: GlobalStyles.colors.white,
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 24,
    textAlign: "center",
  },
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: { flex: 1 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: { minWidth: 120, marginHorizontal: 8 },
});
