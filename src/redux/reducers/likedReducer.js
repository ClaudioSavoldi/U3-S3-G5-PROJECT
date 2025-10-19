import { ADD_TO_LIKED, REMOVE_FROM_LIKED } from "../actions";

const initialState = {
  list: [],
};

const likedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIKED:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_FROM_LIKED:
      return {
        ...state,
        list: state.list.filter((id) => id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default likedReducer;
