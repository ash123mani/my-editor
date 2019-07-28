import uuidv1 from 'uuid/v1';
import { NEW_CLUSTER_TITLE } from './types';

export const setClusterTitle = title => {
  console.log('payload is', title);
  return {
    type: NEW_CLUSTER_TITLE,
    payload: {
      content: title,
      clusterId: uuidv1()
    }
  };
};
