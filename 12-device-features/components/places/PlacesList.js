import {FlatList, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../constants/colors";
import PlaceItem from "./PlaceItem";

const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places yet...</Text>
      </View>
    );
  }
  
  const renderItem = (itemData) => {
    const place = itemData.item;
    return <PlaceItem place={place}/>;
  };
  return (
    <FlatList style={styles.list}
              data={places}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  list: { margin: 24, },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: { fontSize: 16, color: Colors.primary200 },
});
