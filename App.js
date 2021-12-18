import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import placesReducer from "./store/reducers/places";

// SQLite Database
import { init } from "./helpers/db";
init()
  .then(() => {
    console.log("Initialized Database");
  })
  .catch((err) => {
    console.log(err);
  });

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// Navigators
import { NavigationContainer } from "@react-navigation/native";
import { PlacesNavigator } from "./navigation/PlacesNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PlacesNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
