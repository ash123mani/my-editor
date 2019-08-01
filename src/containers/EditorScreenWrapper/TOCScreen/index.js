import { connect } from 'react-redux';

import { itemToCreate } from '../../../redux/actions/createItemActions';
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
    itemToCreate: item => dispatch(itemToCreate(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TOCScreen);
