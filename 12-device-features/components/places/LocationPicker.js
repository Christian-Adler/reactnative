import {Alert, StyleSheet, View} from "react-native";
import OutlinedButton from "../ui/OutlinedButton";
import {Colors} from "../../constants/colors";
import {getCurrentPositionAsync, PermissionStatus, useForegroundPermissions} from "expo-location";

const LocationPicker = ({ onPickLocation }) => {
  
  const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
  
  const verifyPermissions = async () => {
    if (locationPermissionInformation.status !== PermissionStatus.GRANTED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions",
        "You need to grant location permission to use this app."
      );
      return false;
    }
    
    return true;
  };
  
  
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      console.log('No location permission');
      return;
    }
    
    const location = await getCurrentPositionAsync(); // Das dauert! Solange sollte was angezeigt werden. Sonst klickt man zu frueh
    console.log('location detected: ', location);
    // getAddress with Google geo code reverse api (cost!)
    if (location) {
      const pickedLoc = { lat: location.coords.latitude, lng: location.coords.longitude, address: 'some address...' };
      // console.log('picked : ', pickedLoc);
      onPickLocation(pickedLoc);
    }
    else
      console.log('No location');
  };
  const pickOnMapHandler = () => {
  
  };
  
  return (<View>
    <View style={styles.mapPreview}></View>
    <View style={styles.actions}>
      <OutlinedButton icon={'location'} onPress={getLocationHandler}>Locate User</OutlinedButton>
      <OutlinedButton icon={'map'} onPress={pickOnMapHandler}>Pick on Map</OutlinedButton>
    </View>
  </View>);
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary400,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around", alignItems: "center",
  }
});
