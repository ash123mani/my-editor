import { combineReducers, createStore } from 'redux';

import { selectedTab } from './selectedTab';
import { createItem } from './createItem';
import { clusterContent } from './clusterContent';
import { independentItem } from './independentItem';
import { itemContent } from './itemContent';
import { selectedType } from './currentSelectedType';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: storage,
  // blacklist: ['selectedType'],
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
 };

const rootReducer = combineReducers({
  selectedTab,
  createItem,
  clusterContent,
  independentItem,
  itemContent,
  selectedType,
});

const pReducer = persistReducer(persistConfig, rootReducer);


export default pReducer;

