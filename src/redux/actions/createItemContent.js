import uuidv1 from 'uuid/v1';

import { CREATE_INDEPENDENT_ITEM, DELETE_INDEPENDENT_ITEM } from './types';

export const createItemContent = (itemData, id = null) => {
  let itemId;

  if (id) {
    itemId = id;
  } else {
    itemId = uuidv1();
  }

  return {
    type: CREATE_INDEPENDENT_ITEM,
    payload: {
      item: {
        title: itemData.title,
        content: itemData.content,
        id: itemId,
        type: 'item',
      },
    },
  };
};

export const deleteIndependentItem = id => {
  return {
    type: DELETE_INDEPENDENT_ITEM,
    payload: id,
  };
};
