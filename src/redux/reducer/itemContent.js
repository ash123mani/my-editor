import { CREATE_INDEPENDENT_ITEM } from '../actions/types';

const initialState = {
  items: {}
};

export const itemContent = (state = initialState, action) => {
  console.log('state is', state, 'payload is', action);
  const itemId = action.payload && action.payload.itemId;

  switch (action.type) {
    case CREATE_INDEPENDENT_ITEM:
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
