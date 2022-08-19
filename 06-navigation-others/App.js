import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name={"Welcome"} component={WelcomeScreen} />
        <Drawer.Screen name={"User"} component={UserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
