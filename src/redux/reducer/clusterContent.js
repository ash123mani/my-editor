import { NEW_CLUSTER_TITLE, NEW_CLUSTER_ITEM } from '../actions/types';

const initialState = {
  clusters: {},
  clusterItems: {},
};

export const clusterContent = (state = initialState, action) => {
  const clusterId = action.payload && action.payload.id;

  switch (action.type) {
    case NEW_CLUSTER_TITLE:
      return {
        ...state,
        clusters: {
          ...state.clusters,
          ...{ [clusterId]: action.payload },
        },
      };
    case NEW_CLUSTER_ITEM:
      return {
        ...state,
        clusterItems: {
          ...state.clusterItems,
          ...{ [action.payload.itemId]: action.payload.clusterItemData },
        },
      };
    default:
      return state;
  }
};
