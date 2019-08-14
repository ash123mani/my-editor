import { connect } from 'react-redux';

import { itemToCreate } from '../../../redux/actions/createItemActions';
import {
  setSelectedId,
  setSelectedClusterId,
  setSelectedClusterItemId,
} from '../../../redux/actions/currentSelectedType';
import TOCScreen from '../../../components/EditorScreen/TOCScreen';

const mapStateToProps = state => {
  const { clusterContent, itemContent, createItem, selectedType } = state;
  return {
    clusters: clusterContent.clusters,
    items: itemContent.items,
    itemType: createItem.selectedItem,
    clusterItems: clusterContent.clusterItems,
    selectedStuffId: selectedType.itemParentId,
    selectedClusterIds: selectedType.selectedClusters,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    itemToCreate: item => dispatch(itemToCreate(item)),
    setSelectedId: id => dispatch(setSelectedId(id)),
    setSelectedClusterId: id => dispatch(setSelectedClusterId(id)),
    setSelectedClusterItemId: id => dispatch(setSelectedClusterItemId(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TOCScreen);
