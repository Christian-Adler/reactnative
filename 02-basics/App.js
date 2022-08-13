import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Hallo</Text>
      </View>
      <Text style={styles.dummyText}>Hallo2</Text>
      <Button title="Tap me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "#f0d",
    padding: 16,
  },
});
