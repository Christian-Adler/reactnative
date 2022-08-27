import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable style={styles.view} onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text style={styles.text}>{place.title}</Text>
        <Text style={styles.text}>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  view: {},
  text: {},
});
