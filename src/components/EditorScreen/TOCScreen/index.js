import React from 'react';

import TOCCard from '../../TOCCard';
import TOCHeader from '../../TOCHeader';
import { Icon, Popover } from 'antd';

class TOCScreen extends React.Component {
  sideBarAction = flag => {
    this.props.sideBarAction(flag);
  };

  onMaximizeSideBar = () => {
    this.props.sideBarAction(false);
  };

  render() {
    const {
      clusters,
      itemToCreate,
      items,
      itemType,
      setSelectedId,
      clusterItems,
      selectedStuffId,
      setSelectedClusterId,
      selectedClusterIds,
      setSelectedClusterItemId,
      deleteCluster,
      setSelectedIndependentItemId,
      setCurrentlySelectedId,
      deleteIndependentItem,
      isSideBarMinimized,
      sideBarAction,
    } = this.props;

    return (
      <React.Fragment>
        {!isSideBarMinimized ? (
          <div className="toc-conatiner">
            <div className="toc-screen">
              <TOCHeader
                itemToCreate={itemToCreate}
                setSelectedClusterItemId={setSelectedClusterItemId}
                isSideBarMinimized={isSideBarMinimized}
                sideBarAction={sideBarAction}
              />
              <TOCCard
                clusters={Object.values(clusters)}
                items={Object.values(items)}
                itemType={itemType}
                itemToCreate={itemToCreate}
                setSelectedId={setSelectedId}
                clusterItems={Object.values(clusterItems)}
                selectedStuffId={selectedStuffId}
                setSelectedClusterId={setSelectedClusterId}
                selectedClusterIds={selectedClusterIds}
                setSelectedClusterItemId={setSelectedClusterItemId}
                deleteCluster={deleteCluster}
                setSelectedIndependentItemId={setSelectedIndependentItemId}
                setCurrentlySelectedId={setCurrentlySelectedId}
                deleteIndependentItem={deleteIndependentItem}
              />
            </div>
          </div>
        ) : (
          <div className="minimized-sidebar">
            <Popover content={'Maximize SideBar'} trigger="hover" mouseEnterDelay={0.7} placement="right">
              <div className="top-bar__expand" onClick={this.onMaximizeSideBar}>
                <Icon type="fullscreen" />
              </div>
            </Popover>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default TOCScreen;
