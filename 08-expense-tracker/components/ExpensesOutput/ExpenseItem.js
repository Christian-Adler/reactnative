import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";
import { NAV } from "../../constants/navigation";

const ExpenseItem = ({ description, amount, date }) => {
  const navigation = useNavigation();
  const expensePressHandler = () => {
    navigation.navigate(NAV.ManageExpense);
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => [pressed ? styles.pressed : null]}
    >
      <View style={styles.view}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: { opacity: 0.75 },
  view: {
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
    // ios... shadow...
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.white,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 80,
  },
  amount: { color: GlobalStyles.colors.primary500, fontWeight: "bold" },
});
