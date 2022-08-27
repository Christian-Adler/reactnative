import {StyleSheet, Text, View} from "react-native";

const AddPlace = (props) => {
  return (<View style={styles.view}>
    <Text style={styles.text}>AddPlaces</Text>
  </View>);
};

export default AddPlace;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  text: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
