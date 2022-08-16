import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

const GameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/*GUESS*/}
      <View>
        <Text>Higher or lower</Text>
        {/*+ -*/}
      </View>
      <View>{/*LOG ROunds*/}</View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
