import uuidv1 from 'uuid/v1';
import { INDEPENDENT_ITEM_HEADING, INDEPENDENT_ITEM_CONTENT } from './types';

export const setIndependentItemHeading = payload => {
  return {
    type: INDEPENDENT_ITEM_HEADING,
    payload
  };
};


export const setIndependentItemContent = payload => {
  return {
    type: INDEPENDENT_ITEM_CONTENT,
    payload
  }
}



