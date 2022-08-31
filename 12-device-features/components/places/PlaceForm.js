import {ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {useCallback, useState} from "react";
import {Colors} from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../ui/Button";
import {Place} from "../../models/place";

const PlaceForm = ({ onCreatePlace }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [pickedLocation, setPickedLocation] = useState();
  const [selectedImage, setSelectedImage] = useState();
  
  const changeTitleHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };
  
  const takeImageHandler = useCallback((imageUri) => {
    setSelectedImage(imageUri);
  }, []);
  const pickLocationHandler = useCallback((location) => {
    // console.log('pickedLocatinHandler: ', location);
    setPickedLocation(location)
  }, []);
  
  const saveHandler = () => {
    // console.log('saveHandler', enteredTitle, selectedImage, pickedLocation);
    // console.log('saveHandler: pickedLocation: ', pickedLocation);
    if (!enteredTitle || !selectedImage || !pickedLocation) {
      console.log('Missing data for place');
      return;
    }
    onCreatePlace(new Place(enteredTitle, selectedImage, pickedLocation));
  };
  
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler}/>
      <LocationPicker onPickLocation={pickLocationHandler}/>
      <Button onPress={saveHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
