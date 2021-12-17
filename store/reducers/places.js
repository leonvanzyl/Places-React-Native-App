import Place from "../../models/place";
import { ADD_PLACE } from "../actions/places";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        new Date(),
        action.placeData.title,
        action.placeData.image
      );
      return {
        ...state,
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
