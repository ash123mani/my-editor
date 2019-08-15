import { SELECTED_TAB } from './types';

export const setTab = tab => {
  return {
    type: SELECTED_TAB,
    payload: tab,
  };
};
