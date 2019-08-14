import { SET_SELECTED_ID, SELECTED_CLUSTER_ID, SET_SELECTED_CLUSTER_ITEM_ID } from '../actions/types';

const initialState = {
  itemParentId: null,
  selectedClusters: [],
  clusterItemId: null,
};

export const selectedType = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_ID:
      return { ...state, itemParentId: action.payload };

    case SELECTED_CLUSTER_ID:
      const selectedClusters = state.selectedClusters.includes(action.payload)
        ? state.selectedClusters.filter(id => id !== action.payload)
        : [...state.selectedClusters, action.payload];

      return { ...state, selectedClusters: selectedClusters };

    case SET_SELECTED_CLUSTER_ITEM_ID:
      return { ...state, clusterItemId: action.payload };

    default:
      return state;
  }
};
