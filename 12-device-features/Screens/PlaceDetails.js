import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import OutlinedButton from "../components/ui/OutlinedButton";
import {Colors} from "../constants/colors";
import {useEffect, useState} from "react";
import {fetchPlaceDetails} from "../util/database";

const PlaceDetails = ({ navigation, route }) => {
  const [selectedPlace, setSelectedPlace] = useState();
  const selectedPlaceId = route.params.placeId;
  
  useEffect(() => {
    const loadPlaceData = async () => {
      try {
        const place = await fetchPlaceDetails(selectedPlaceId);
        setSelectedPlace(place);
        navigation.setOptions({ title: place.title });
      } catch (e) {
        console.log('Failed to load place', e);
      }
    };
    loadPlaceData();
  }, [selectedPlaceId]);
  
  const showOnMapHandler = () => {
  
  }
  
  if (!selectedPlace) {
    return <View style={styles.fallback}><Text>Loading place data...</Text></View>;
  }
  
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedPlace.imageUri }}/>
      <View style={styles.location}>
        <View style={styles.addressContainer}>
          <Text style={styles.text}>{selectedPlace.address}</Text>
        </View>
        <OutlinedButton icon={'map'} onPress={showOnMapHandler}>View on Map</OutlinedButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: { alignItems: "center", justifyContent: "center" },
  image: {
    width: '100%',
    height: '35%',
    minHeight: 300,
  },
  location: {
    alignItems: "center",
    justifyContent: "center",
  },
  addressContainer: {
    padding: 20,
  },
  text: {
    color: Colors.primary500,
    fontWeight: "bold", textAlign: "center",
    fontSize: 16,
  },
});
