import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AllPlaces from "./Screens/AllPlaces";
import AddPlace from "./Screens/AddPlace";
import IconButton from "./components/ui/IconButton";
import {Colors} from "./constants/colors";
import {useEffect, useState} from "react";
import {init} from "./util/database";
import * as SplashScreen from "expo-splash-screen";
import PlaceDetails from "./Screens/PlaceDetails";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInitialised, setDbInitialized] = useState(false);
  
  useEffect(() => {
    const initDB = async () => {
      try {
        await init();
        console.log('init db success');
        setDbInitialized(true);
      } catch (e) {
        console.log('init db failed', e);
      }
    }
    initDB();
  }, []);
  
  useEffect(() => {
    const check = async () => {
      if (dbInitialised)
        await SplashScreen.hideAsync();
    }
    check();
  }, [dbInitialised]);
  
  if (!dbInitialised) return null;
  
  return (
    <>
      <StatusBar style="dark"/>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name={"AllPlaces"}
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your favorite places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon={"add"}
                  size={24}
                  color={tintColor}
                  onPress={() => {
                    navigation.navigate("AddPlace");
                  }}
                />
              ),
            })}
          />
          <Stack.Screen
            name={"AddPlace"}
            component={AddPlace}
            options={{ title: "Add a new place" }}
          />
          <Stack.Screen
            name={"PlaceDetails"}
            component={PlaceDetails} options={{ title: 'Loading Place...' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

