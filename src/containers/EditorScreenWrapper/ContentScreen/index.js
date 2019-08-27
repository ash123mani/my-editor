import React from 'react';
import { connect } from 'react-redux';

import CreateItem from '../../../components/EditorScreen/CreateItem';
import { setClusterTitle, setClusterItem } from '../../../redux/actions/clusterContent';
import { setIndependentItemHeading, setIndependentItemContent } from '../../../redux/actions/independentItems';
import { createItemContent } from '../../../redux/actions/createItemContent';
import { itemToCreate } from '../../../redux/actions/createItemActions';

class ContentScreen extends React.PureComponent {
  render() {
    const {
      selectedItem,
      setClusterTitle,
      setIndependentItemHeading,
      setIndependentItemContent,
      currentItemContent,
      currentItemHeading,
      createItemContent,
      itemToCreate,
      setClusterItem,
      selectedTypeId,
      selectedClusterItemId,
      clusterItems,
      selectedIndependentItemId,
      items,
      currentlySelectedId,
    } = this.props;

    return (
      <div className="content-screen">
        <div className="content-screen__wrapper">
          {!selectedItem ? (
            <div className="content-screen--empty">
              <h1>Select an item or cluster</h1>
            </div>
          ) : (
            <CreateItem
              selectedItem={selectedItem}
              setClusterTitle={setClusterTitle}
              setIndependentItemHeading={setIndependentItemHeading}
              setIndependentItemContent={setIndependentItemContent}
              currentItemContent={currentItemContent}
              currentItemHeading={currentItemHeading}
              createItemContent={createItemContent}
              itemToCreate={itemToCreate}
              setClusterItem={setClusterItem}
              selectedTypeId={selectedTypeId}
              selectedClusterItemId={selectedClusterItemId}
              clusterItems={Object.values(clusterItems)}
              selectedIndependentItemId={selectedIndependentItemId}
              items={Object.values(items)}
              currentlySelectedId={currentlySelectedId}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setClusterTitle: clusterTitle => dispatch(setClusterTitle(clusterTitle)),
    setIndependentItemHeading: data => dispatch(setIndependentItemHeading(data)),
    setIndependentItemContent: data => dispatch(setIndependentItemContent(data)),
    createItemContent: data => dispatch(createItemContent(data)),
    itemToCreate: itemType => dispatch(itemToCreate(itemType)),
    setClusterItem: clusterItemData => dispatch(setClusterItem(clusterItemData)),
  };
};

const mapStateToProps = state => {
  const { createItem, independentItem, selectedType, clusterContent, itemContent } = state;
  return {
    selectedItem: createItem.selectedItem,
    currentItemContent: independentItem.currentContent,
    currentItemHeading: independentItem.currentHeading,
    selectedTypeId: selectedType.itemParentId,
    selectedClusterItemId: selectedType.clusterItemId,
    clusterItems: clusterContent.clusterItems,
    selectedIndependentItemId: selectedType.selectedIndependentItemId,
    items: itemContent.items,
    currentlySelectedId: selectedType.currentlySelectedId,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContentScreen);
