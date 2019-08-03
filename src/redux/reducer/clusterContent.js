import { NEW_CLUSTER_TITLE } from '../actions/types';

const initialState = {
  clusters: {}
};

export const clusterContent = (state = initialState, action) => {
  const clusterId = action.payload && action.payload.id;

  switch (action.type) {
    case NEW_CLUSTER_TITLE:
      return {
        ...state,
        clusters: {
          ...state.clusters,
          ...{ [clusterId]: action.payload }
        }
      };
    default:
      return state;
  }
};
