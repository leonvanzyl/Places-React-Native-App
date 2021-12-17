import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PlaceDetailScreen = () => {
  return (
    <View>
      <Text>Place Details</Text>
    </View>
  );
};

export default PlaceDetailScreen;

const styles = StyleSheet.create({});

export const screenOptions = (navData) => {
  return {
    title: navData.route.params.placeTitle,
  };
};
