import { INDEPENDENT_ITEM_HEADING, INDEPENDENT_ITEM_CONTENT } from '../actions/types';

const initialState = {};

export const independentItem = (state = initialState, action) => {
  switch (action.type) {
    case INDEPENDENT_ITEM_HEADING:
      return {
        ...state,
        currentHeading: { ...state.currentHeading, ...action.payload },
      };
    case INDEPENDENT_ITEM_CONTENT:
      return {
        ...state,
        currentContent: { ...state.currentContent, ...action.payload },
      };
    default:
      return state;
  }
};
