import {
  SET_SELECTED_ID,
  SELECTED_CLUSTER_ID,
  SET_SELECTED_CLUSTER_ITEM_ID,
  SET_SELECTED_INDEPENDENT_ITEM_ID,
} from './types';

export const setSelectedId = id => {
  return {
    type: SET_SELECTED_ID,
    payload: id,
  };
};

export const setSelectedClusterId = id => {
  return {
    type: SELECTED_CLUSTER_ID,
    payload: id,
  };
};

export const setSelectedClusterItemId = id => {
  return {
    type: SET_SELECTED_CLUSTER_ITEM_ID,
    payload: id,
  };
};

export const setSelectedIndependentItemId = id => {
  return {
    type: SET_SELECTED_INDEPENDENT_ITEM_ID,
    payload: id,
  };
};
