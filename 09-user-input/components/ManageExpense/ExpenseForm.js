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
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues?.amount?.toString() || "",
      isValid: true,
    },
    date: {
      value: defaultValues?.date.toISOString().slice(0, 10) || "",
      isValid: true,
    },
    description: {
      value: defaultValues?.description || "",
      isValid: true,
    },
  });

  const inputChangedHandler = (inputIdentifier, entered) => {
    setInputs((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: { value: entered, isValid: true },
      };
    });
  };
  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    // Validation
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // Alert.alert("Invalid input", "Please check your input!");
      setInputs((prevState) => {
        return {
          amount: { value: prevState.amount.value, isValid: amountIsValid },
          date: { value: prevState.date.value, isValid: dateIsValid },
          description: {
            value: prevState.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    onSubmit(expenseData);
  };

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          label={"Amount"}
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
          style={styles.rowInput}
        />
        <Input
          label={"Date"}
          invalid={!inputs.date.isValid}
          textInputConfig={{
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputs.date.value,
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label={"Description"}
        invalid={!inputs.description.isValid}
        textInputConfig={{
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputs.description.value,
          multiline: true,
          autoCorrect: false,
          autoCapitalize: "sentences",
        }}
      />

      {formIsInvalid && (
        <Text style={styles.errorText}>
          Invalid input values - please check
        </Text>
      )}

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
  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    fontWeight: "bold",
    margin: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: { minWidth: 120, marginHorizontal: 8 },
});
