import { SELECTED_TAB, SIDE_BAR_ACTION } from '../actions/types';

const initialState = {
  selectedTab: 'All',
  isSideBarMinimized: false,
};

export const selectedTab = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_TAB:
      return {
        ...state,
        selectedTab: action.payload,
      };
    case SIDE_BAR_ACTION:
      return {
        ...state,
        isSideBarMinimized: action.payload,
      };
    default:
      return state;
  }
};
