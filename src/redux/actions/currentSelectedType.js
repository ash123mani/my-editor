import { SET_SELECTED_ID } from './types';

export const setSelectedId = id => {
  return {
    type: SET_SELECTED_ID,
    payload: id
  };
};
