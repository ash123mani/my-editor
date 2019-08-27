import React from 'react';
import 'antd/dist/antd.css';
import { List, Icon, Menu, Popover } from 'antd';

import TOCMore from '../TOCMore';

class TOCCard extends React.Component {
  state = {
    isItemClicked: false,
  };

  componentDidUpdate() {
    if (this.props.itemType === 'clusterItem') {
      this.props.setSelectedClusterItemId(null);
    }
  }

  createClusterItem = event => {
    this.props.itemToCreate('clusterItem');
    this.props.setSelectedId(event.target.id);

    // this.props.setCurrentlySelectedId(event.target.id);
  };

  itemClicked = (item, event) => {
    this.props.setCurrentlySelectedId(item.id);

    if (item.type === 'cluster') {
      this.props.setSelectedClusterId(item.id);
    }

    if (item.type === 'item') {
      this.props.setSelectedIndependentItemId(item.id);
      this.props.itemToCreate('independentItem');
    }
  };

  onClusterItemClick = (clusterItemId, event) => {
    this.props.itemToCreate('showClusterItem');
    this.props.setSelectedClusterItemId(clusterItemId);

    this.props.setCurrentlySelectedId(clusterItemId);
  };

  onDeleteCluster = clusterId => {
    this.props.deleteCluster(clusterId);
  };

  renderItemClusters = item => {
    return (
      <div className="cluster-item">
        {this.props.clusterItems.map(clusterItem => {
          if (clusterItem.parentId === item.id) {
            const data = [clusterItem.title.blocks[0].text];
            return (
              <React.Fragment key={clusterItem.itemId}>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <div
                      className="cluster-item-title"
                      onClick={this.onClusterItemClick.bind(this, clusterItem.itemId)}
                    >
                      <List.Item.Meta description={`${clusterItem.title.blocks[0].text}`} />
                    </div>
                  )}
                />
              </React.Fragment>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  };

  render() {
    const { clusters, items, selectedClusterIds, deleteCluster } = this.props;
    const data = [...clusters, ...items];

    return (
      <div className="toc-card">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item.type === 'cluster' ? <Icon type="copyright" /> : <Icon type="info-circle" />}

              <div onClick={this.itemClicked.bind(this, item)}>
                <List.Item.Meta description={`${item.title.blocks[0].text}`} />
              </div>

              {item.type === 'cluster' ? (
                <Popover placement="top" content="Create Item">
                  <div onClick={this.createClusterItem} id={item.id} className="circle" />
                </Popover>
              ) : (
                <Icon type="like" />
              )}

              <Popover
                content={<TOCMore clusterId={item.id} deleteCluster={this.onDeleteCluster} />}
                placement="right"
                trigger="hover"
              >
                <Icon type="more" />
              </Popover>

              {selectedClusterIds && selectedClusterIds.includes(item.id) ? this.renderItemClusters(item) : null}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TOCCard;
