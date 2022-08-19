import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a3c" },
          headerTintColor: "white",
          drawerActiveBackgroundColor: "#e17fe1",
          drawerActiveTintColor: "#3c0a3c",
          // drawerStyle: { backgroundColor: "#ccc" },
        }}
      >
        <Drawer.Screen
          name={"Welcome"}
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: ({ color, size }) => {
              return <Ionicons name={"home"} color={color} size={size} />;
            },
          }}
        />
        <Drawer.Screen
          name={"User"}
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Ionicons name={"person"} color={color} size={size} />;
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
