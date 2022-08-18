import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import NAV from "../constants/navigation";

const CategoriesScreen = ({ navigation }) => {
  // special prop automatically from Navigator
  // const { width } = useWindowDimensions();
  // const numColumns = width / 200; Fuehrt leider zum Fehler
  const numColumns = 2;

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate(NAV.MealsOverview, {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
    />
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
