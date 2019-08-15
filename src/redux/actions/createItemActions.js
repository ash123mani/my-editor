import { ITEM_TO_CREATE } from './types';

export const itemToCreate = item => {
  return {
    type: ITEM_TO_CREATE,
    payload: item,
  };
};
