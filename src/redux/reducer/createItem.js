import { ITEM_TO_CREATE } from '../actions/types';

let initialState = {
  selectedItem: null,
};

export const createItem = (state = initialState, action) => {
  switch (action.type) {
    case ITEM_TO_CREATE:
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      return state;
  }
};
