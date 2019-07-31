import { combineReducers } from 'redux';
import { selectedTab } from './selectedTab';
import { createItem } from './createItem';
import { clusterContent } from './clusterContent';
import { indepandentItem } from './independentItem';

export default combineReducers({
  selectedTab,
  createItem,
  clusterContent,
  indepandentItem
});
