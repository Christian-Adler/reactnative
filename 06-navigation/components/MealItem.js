import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NAV from "../constants/navigation";
import MealDetails from "./MealDetails";

const MealItem = ({ meal }) => {
  const navigation = useNavigation();

  const selectMealHandler = () => {
    navigation.navigate(NAV.MealDetail, {
      mealId: meal.id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectMealHandler}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <View style={styles.innerContainer}>
            <Image source={{ uri: meal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <MealDetails meal={meal} />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    // padding: 8,
    margin: 8,
    backgroundColor: "#fff",
    // minWidth: 300,
    alignItems: "stretch",
    elevation: 4,
    overflow: Platform.select({ ios: "visible", android: "hidden" }), // nur bei android, sonst ist in iOS der Schatten weg
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 }, // iOS shaddow funktioniert nur mit wenn auch backgroundColor angegeben ist!
  },
  button: { flex: 1 },
  buttonPressed: {
    opacity: 0.5,
    // backgroundColor: "rgba(0,0,0,0.2)",
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 200,
    // resizeMode: "cover",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});
