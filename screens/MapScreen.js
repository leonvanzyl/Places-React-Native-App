import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MapScreen = () => {
  return (
    <View>
      <Text>Map Screen</Text>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});

export const screenOptions = (navData) => {
  return {
    title: "Map Screen",
  };
};
