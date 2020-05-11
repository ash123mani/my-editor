import uuidv1 from 'uuid/v1';
import { NEW_CLUSTER_TITLE, NEW_CLUSTER_ITEM, DELETE_CLUSTER } from './types';

export const setClusterTitle = title => {
  return {
    type: NEW_CLUSTER_TITLE,
    payload: {
      title: title,
      id: uuidv1(),
      type: 'cluster',
    },
  };
};

export const setClusterItem = (payload, id = null) => {
  const date = new Date();
  let itemId;
  console.log('id', id);

  if (id) {
    itemId = id;
  } else {
    itemId = `${payload.parentId}--cItem-${date.getTime().toString()}`;
  }

  return {
    type: NEW_CLUSTER_ITEM,
    payload: {
      itemId,
      clusterItemData: {
        title: payload.data.title,
        content: payload.data.content,
        parentId: payload.parentId,
        itemId,
        type: 'clusterItem',
      },
    },
  };
};

export const deleteCluster = clusterId => {
  return {
    type: DELETE_CLUSTER,
    payload: clusterId,
  };
};
