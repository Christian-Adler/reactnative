import { Button, StyleSheet, View } from "react-native";
import { launchCameraAsync } from "expo-image-picker";

const ImagePicker = (props) => {
  const takeImageHandler = async () => {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5, // Groesse beschraenken
    });
    console.log(image);
  };

  return (
    <View style={styles.view}>
      <View></View>
      <Button title={"Take image"} onPress={takeImageHandler} />
    </View>
  );
};

export default ImagePicker;

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
