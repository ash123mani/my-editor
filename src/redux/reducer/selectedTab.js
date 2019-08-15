import { SELECTED_TAB } from '../actions/types';

const initialState = {
  selectedTab: 'All',
};

export const selectedTab = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload,
      };
    default:
      return state;
  }
};
