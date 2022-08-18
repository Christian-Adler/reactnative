import { StyleSheet, Text, View } from "react-native";

const MealsOverviewScreen = ({ /*navigation,*/ route }) => {
  // https://reactnavigation.org/docs/navigation-prop
  // https://reactnavigation.org/docs/route-prop
  const { categoryId: catId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {catId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
