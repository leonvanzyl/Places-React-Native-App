import { ADD_PLACE } from "../actions/places";

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {};
    default:
      return state;
  }
};
