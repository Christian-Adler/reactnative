import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, icon, size, color }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    margin: 4,
  },
  pressed: { opacity: 0.7 },
});
