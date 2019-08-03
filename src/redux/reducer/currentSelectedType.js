import { SET_SELECTED_ID } from '../actions/types';

const initialState = {
  id: null
};

export const selectedType = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ID:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
