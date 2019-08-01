import { combineReducers } from 'redux';
import { selectedTab } from './selectedTab';
import { createItem } from './createItem';
import { clusterContent } from './clusterContent';
import { independentItem } from './independentItem';
import { itemContent } from './itemContent';

export default combineReducers({
  selectedTab,
  createItem,
  clusterContent,
  independentItem,
  itemContent
});
