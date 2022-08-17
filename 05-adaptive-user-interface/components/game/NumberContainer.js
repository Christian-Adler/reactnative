import {Dimensions, StyleSheet, Text, View} from 'react-native';

import Colors from '../../constants/colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width; // screen/window : iOS kein Unterschied, Android screen: alles, window: ohne StatusBar

// console.log(JSON.stringify(Dimensions.get('window'))); // tablet: {"width":800,"height":1232,"scale":1.5,"fontScale":1}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    // fontWeight: 'bold',
    fontFamily: 'open-sans-bold'
  },
});
