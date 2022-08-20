import { StyleSheet, Text, View } from "react-native";

const RecentExpenses = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>RecentExpenses</Text>
    </View>
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
