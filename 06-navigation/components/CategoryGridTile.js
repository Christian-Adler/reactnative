import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        onPress={onPress}
        // android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 250,
    // maxWidth: 200,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.select({ ios: "visible", android: "hidden" }), // nur bei android, sonst ist in iOS der Schatten weg
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 }, // iOS shaddow funktioniert nur mit wenn auch backgroundColor angegeben ist!
    backgroundColor: "#fff",
  },
  button: { flex: 1 },
  buttonPressed: {
    opacity: 0.5,
    // backgroundColor: "rgba(0,0,0,0.2)",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
