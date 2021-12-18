import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

// Constants
import Colors from "../constants/Colors";

// MAIN COMPONENT
const MapScreen = (props) => {
  // STATES
  const [selectedLocation, setSelectedLocation] = useState();

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity
            style={styles.headerButton}
            onPress={savePickedLocationHandler}
          >
            <Text style={styles.headerButtonText}>Save</Text>
          </TouchableOpacity>
        );
      },
    });
  }, [savePickedLocationHandler, selectedLocation]);

  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // HANDLER FUNCTIONS
  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      return;
    }

    console.log("Set params");

    props.navigation.navigate({
      name: "NewPlace",
      params: { pickedLocation: selectedLocation },
    });
  }, [selectedLocation]);

  const selectLocationHandler = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
  }

  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}
    >
      {markerCoordinates && (
        <Marker title="Picked Location" coordinate={markerCoordinates} />
      )}
    </MapView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === "android" ? "white" : Colors.primary,
  },
  headerButton: {
    marginHorizontal: 20,
  },
});

export const screenOptions = (navData) => {
  return {
    title: "Map Screen",
  };
};
