import { connect } from 'react-redux';

import { itemToCreate } from '../../../redux/actions/createItemActions';
import { setSelectedId } from '../../../redux/actions/currentSelectedType';
import TOCScreen from '../../../components/EditorScreen/TOCScreen';

const mapStateToProps = state => {
  return {
    clusters: state.clusterContent.clusters,
    items: state.itemContent.items,
    itemType: state.createItem.selectedItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    itemToCreate: item => dispatch(itemToCreate(item)),
    setSelectedId: id => dispatch(setSelectedId(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TOCScreen);
