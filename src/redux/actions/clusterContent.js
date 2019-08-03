import uuidv1 from 'uuid/v1';
import { NEW_CLUSTER_TITLE } from './types';

export const setClusterTitle = title => {
  return {
    type: NEW_CLUSTER_TITLE,
    payload: {
      title: title,
      id: uuidv1(),
      type: 'cluster'
    }
  };
};


export const setClusterItem = payload => {
  return {

  }
}

