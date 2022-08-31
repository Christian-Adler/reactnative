import PlacesList from "../components/places/PlacesList";
import {useEffect, useState} from "react";
import {useIsFocused} from "@react-navigation/native";

const AllPlaces = ({ route }) => {
  const [places, setPlaces] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      // console.log(route.params);
      setPlaces((prevState) => [...prevState, route.params.place]);
    }
  }, [isFocused, route]);
  
  return <PlacesList places={places}/>;
};

export default AllPlaces;
