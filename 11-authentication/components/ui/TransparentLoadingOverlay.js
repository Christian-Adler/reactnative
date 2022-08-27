import {ActivityIndicator, StyleSheet, Text, View} from "react-native";

/**
 * Transparentes Loading Overlay - muss direkt nach der zu ueberzeichnenden View liegen
 * @param message
 * @param color
 * @param show
 * @returns {JSX.Element}
 * @constructor
 */
const TransparentLoadingOverlay = ({ message, color = 'blue', show = true }) => {
  if (!show) return null;
  
  return (<View style={styles.view}>
    <Text style={styles.text}>{message}</Text>
    <ActivityIndicator size={'large'} color={color}/>
  </View>);
};

export default TransparentLoadingOverlay;

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    top: 0, left: 0,
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: 'rgba(255,255,255,0.6)',
    elevation: 1000, // muss hoeher sein als sonstiges elevation (wie z-index)
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 14,
  },
});
