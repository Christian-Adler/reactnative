import { StyleSheet, Text, View } from "react-native";
//import {useRoute} from "@react-navigation/native";

const MealsOverviewScreen = ({ /*navigation,*/ route }) => {
  // https://reactnavigation.org/docs/navigation-prop
  // https://reactnavigation.org/docs/route-prop
  const { categoryId: catId } = route.params;

  // route-Objekt per Hook waere in allen Komponenten erreichbar
  // const routeObj = useRoute();

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
