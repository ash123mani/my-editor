import { SET_SELECTED_ID, SELECTED_CLUSTER_ID } from './types';

export const setSelectedId = id => {
  return {
    type: SET_SELECTED_ID,
    payload: id
  };
};

export const setSelectedClusterId = id => {
  return {
    type: SELECTED_CLUSTER_ID,
    payload: id
  };
};
