import React from 'react';

import TOCCard from '../../TOCCard';
import TOCHeader from '../../TOCHeader';

class TOCScreen extends React.Component {
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
    } = this.props;

    return (
      <div className="toc-conatiner">
        <div className="toc-screen">
          <TOCHeader itemToCreate={itemToCreate} setSelectedClusterItemId={setSelectedClusterItemId} />
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
          />
        </div>
      </div>
    );
  }
}

export default TOCScreen;
