import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import NAV from "./constants/navigation";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen
        name={NAV.MealsCategories}
        component={CategoriesScreen}
        options={{ title: "All Categories" }}
      />
      <Drawer.Screen name={NAV.Favorites} component={FavoritesScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <Fragment>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name={NAV.DrawerNavigator}
            options={{
              headerShown: false,
            }}
            component={DrawerNavigator}
          />
          <Stack.Screen
            name={NAV.MealsOverview}
            // options dynamically
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return { title: catId };
            // }}
            component={MealsOverviewScreen}
          />
          <Stack.Screen name={NAV.MealDetail} component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

const styles = StyleSheet.create({});
