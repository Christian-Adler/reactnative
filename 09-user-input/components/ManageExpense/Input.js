import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

const Input = ({ label, style, textInputConfig }) => {
  const inputStyle = [styles.input];
  if (textInputConfig?.multiline) inputStyle.push(styles.inputMultiline);

  return (
    <View style={[styles.view, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={inputStyle} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
    padding: 8,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    marginHorizontal: 4,
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },
  inputMultiline: { minHeight: 100, textAlignVertical: "top" },
});
