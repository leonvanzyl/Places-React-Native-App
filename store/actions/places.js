import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";
export const SET_PLACES = "SET_PLACES";

// SQLite Database
import { insertPlace, fetchPlaces } from "../../helpers/db";

export const addPlace = (title, image) => {
  // Use REDUX-THUNK to create the place and move the image
  return async (dispatch) => {
    // Use the FileSystem API to get access to the main Document folder on the device
    const fileName = image.split("/").pop(); // Popping the last element will give us the file name
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      // Move the image from the temp storage to document storage
      await FileSystem.moveAsync({ from: image, to: newPath });
      // Insert an entry into our SQLite database
      const dbResult = await insertPlace(
        title,
        newPath,
        "Dummy Address",
        15.6,
        12.3
      );
      console.log(dbResult);
    } catch (err) {
      console.log(err);
      throw err;
    }

    dispatch({
      type: ADD_PLACE,
      placeData: {
        id: dbResult.insertId,
        title,
        image: newPath,
      },
    });
  };
};

// Fetch all places
export const loadPlaces = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchPlaces();

      dispatch({ type: SET_PLACES, places: dbResult.rows._array });
    } catch (err) {
      throw err;
    }
  };
};
