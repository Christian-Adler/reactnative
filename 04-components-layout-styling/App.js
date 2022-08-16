import { StatusBar as StatusBarExpo } from "expo-status-bar"; // fuer Styling
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Fragment, useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(undefined);
  const [gameIsOver, setGameIsOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = () => {
    setGameIsOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  } else if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  return (
    <Fragment>
      <StatusBarExpo style="light" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.safeAreaView}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  safeAreaView: {
    flex: 1,
    padding: 24,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 25 : 0, // Bei Android ohne NodeCam
  },
});
