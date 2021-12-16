import * as React from "react";
import { Platform } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

// Constants
import Colors from "../constants/Colors";

// Screens
import MapScreen, {
  screenOptions as mapScreenOptions,
} from "../screens/MapScreen";
import NewPlaceScreen, {
  screenOptions as newPlaceScreenOptions,
} from "../screens/NewPlaceScreen";
import PlaceDetailScreen, {
  screenOptions as placeDetailScreenOptions,
} from "../screens/PlaceDetailScreen";
import PlacesListScreen, {
  screenOptions as placeListScreenOptions,
} from "../screens/PlacesListScreen";

// Defaut Options
const defaultOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

// Main Stack Navigator
const PlacesStackNavigator = createStackNavigator();

export const PlacesNavigator = () => {
  return (
    <PlacesStackNavigator.Navigator screenOptions={defaultOptions}>
      <PlacesStackNavigator.Screen
        name="Places"
        component={PlacesListScreen}
        options={placeListScreenOptions}
      />
      <PlacesStackNavigator.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={placeDetailScreenOptions}
      />
      <PlacesStackNavigator.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={newPlaceScreenOptions}
      />
      <PlacesStackNavigator.Screen
        name="Map"
        component={MapScreen}
        options={mapScreenOptions}
      />
    </PlacesStackNavigator.Navigator>
  );
};
