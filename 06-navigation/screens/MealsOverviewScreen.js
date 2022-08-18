import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";
//import {useRoute} from "@react-navigation/native";

const MealsOverviewScreen = ({ navigation, route }) => {
  // https://reactnavigation.org/docs/navigation-prop
  // https://reactnavigation.org/docs/route-prop
  const { categoryId: catId } = route.params;

  // route-Objekt per Hook waere in allen Komponenten erreichbar
  // const routeObj = useRoute();

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    // frueher als useEffect - useEffect erst nach dem ersten durchlauf der Component funktion
    const categoryTitle = CATEGORIES.find((item) => item.id === catId).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  const mealItemRenderer = (itemData) => {
    const item = itemData.item;
    return <MealItem meal={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={mealItemRenderer}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
});
