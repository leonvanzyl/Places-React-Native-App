import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";

const PlacesListScreen = () => {
  return (
    <View>
      <Text>Places List</Text>
    </View>
  );
};

export default PlacesListScreen;

const styles = StyleSheet.create({});

export const screenOptions = (navData) => {
  return {
    title: "Places List Screen",
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Add a place"
            iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
            onPress={() => {
              navData.navigation.navigate("NewPlace");
            }}
          />
        </HeaderButtons>
      );
    },
  };
};
