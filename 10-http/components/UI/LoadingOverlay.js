import { ActivityIndicator, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const LoadingOverlay = (props) => {
  return (
    <View style={styles.view}>
      <ActivityIndicator size={"large"} color={GlobalStyles.colors.white} />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary500,
  },
});
