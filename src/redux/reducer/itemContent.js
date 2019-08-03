import { CREATE_INDEPENDENT_ITEM } from '../actions/types';

const initialState = {
  items: {}
};

export const itemContent = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INDEPENDENT_ITEM:
      const itemId = action.payload && action.payload.item.id;
      return {
        ...state,
        items: {
          ...state.items,
          ...{ [itemId]: action.payload.item }
        }
      };
    default:
      return state;
  }
};
