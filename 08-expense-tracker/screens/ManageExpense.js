import { StyleSheet, Text, View } from "react-native";

const ManageExpense = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>ManageExpense</Text>
    </View>
  );
};

export default ManageExpense;

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
