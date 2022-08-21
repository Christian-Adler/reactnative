import { StyleSheet, Text, View } from "react-native";

const ExpenseForm = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>ExpenseForm</Text>
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  text: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
