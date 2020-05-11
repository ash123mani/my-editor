import {
  SET_SELECTED_ID,
  SELECTED_CLUSTER_ID,
  SET_SELECTED_CLUSTER_ITEM_ID,
  SET_SELECTED_INDEPENDENT_ITEM_ID,
  CURRENTLY_SLECETED,
} from '../actions/types';

const initialState = {
  itemParentId: null,
  selectedClusters: [],
  clusterItemId: null,
  selectedIndependentItemId: null,
  currentlySelectedId: null,
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
      return { ...state, clusterItemId: action.payload, selectedIndependentItemId: null };
    case SET_SELECTED_INDEPENDENT_ITEM_ID:
      return { ...state, selectedIndependentItemId: action.payload, clusterItemId: null, itemParentId: null };
    case CURRENTLY_SLECETED:
      return { ...state, currentlySelectedId: action.payload };
    default:
      return state;
  }
};
