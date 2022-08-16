import { StyleSheet, Text, View } from "react-native";

const GameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
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
    padding: 12,
  },
});
