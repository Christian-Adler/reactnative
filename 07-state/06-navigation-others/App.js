import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a3c" },
          headerTintColor: "white",
          tabBarActiveTintColor: "#3c0a3c",
        }}
      >
        <BottomTab.Screen
          name={"Welcome"}
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons color={color} size={size} name={"home"} />;
            },
          }}
        />
        <BottomTab.Screen
          name={"User"}
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Ionicons color={color} size={size} name={"person"} />;
            },
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
