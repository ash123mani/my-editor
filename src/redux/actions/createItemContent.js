import uuidv1 from 'uuid/v1';

import { CREATE_INDEPENDENT_ITEM } from './types';

export const createItemContent = itemData => {
  const itemId = uuidv1();

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
