import { connect } from 'react-redux';

import { itemToCreate } from '../../../redux/actions/createItemActions';
import {
  setSelectedId,
  setSelectedClusterId,
  setSelectedClusterItemId,
  setSelectedIndependentItemId,
} from '../../../redux/actions/currentSelectedType';
import { deleteCluster } from '../../../redux/actions/clusterContent';
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
    deleteCluster: id => dispatch(deleteCluster(id)),
    setSelectedIndependentItemId: id => dispatch(setSelectedIndependentItemId(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TOCScreen);
