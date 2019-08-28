import { SELECTED_TAB, SIDE_BAR_ACTION } from './types';

export const setTab = tab => {
  return {
    type: SELECTED_TAB,
    payload: tab,
  };
};

export const sideBarAction = payload => {
  return {
    type: SIDE_BAR_ACTION,
    payload,
  };
};
