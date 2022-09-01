import {StyleSheet} from "react-native";
import PlaceForm from "../components/places/PlaceForm";
import {insertPlace} from "../util/database";

const AddPlace = ({ navigation }) => {
  const createPlaceHandler = async (place) => {
    try {
      await insertPlace(place);
    } catch (e) {
      console.log('Failed to insert place!', e);
    }
    navigation.navigate('AllPlaces');
  }
  return <PlaceForm onCreatePlace={createPlaceHandler}/>;
};

export default AddPlace;

const styles = StyleSheet.create({});
