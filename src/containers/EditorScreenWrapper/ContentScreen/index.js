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
      isSideBarMinimized,
    } = this.props;

    return (
      <div className={`content-screen ${isSideBarMinimized ? 'minimized-content-screen' : null}`}>
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
    createItemContent: (data, id) => dispatch(createItemContent(data, id)),
    itemToCreate: itemType => dispatch(itemToCreate(itemType)),
    setClusterItem: (clusterItemData, clusterItemId) => dispatch(setClusterItem(clusterItemData, clusterItemId)),
  };
};

const mapStateToProps = state => {
  const { createItem, independentItem, selectedType, clusterContent, itemContent, selectedTab } = state;
  return {
    selectedItem: createItem.selectedItem,
    currentItemContent: independentItem.currentContent,
    currentItemHeading: independentItem.currentHeading,
    selectedTypeId: selectedType.itemParentId,
    selectedClusterItemId: selectedType.clusterItemId,
    clusterItems: clusterContent.clusterItems,
    selectedIndependentItemId: selectedType.selectedIndependentItemId,
    items: itemContent.items,
    isSideBarMinimized: selectedTab.isSideBarMinimized,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentScreen);
