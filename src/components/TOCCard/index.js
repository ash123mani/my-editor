import React from 'react';
import 'antd/dist/antd.css';
import { List, Icon, Popover } from 'antd';

import TOCMore from '../TOCMore';

class TOCCard extends React.Component {
  state = {
    isItemClicked: false,
    likes: 0,
  };

  componentDidUpdate() {
    if (this.props.itemType === 'clusterItem') {
      this.props.setSelectedClusterItemId(null);
    }
  }

  createClusterItem = event => {
    this.props.itemToCreate('clusterItem');
    this.props.setSelectedId(event.target.id);

    this.props.setCurrentlySelectedId(event.target.id);
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

  deleteItem = item => {
    if (item.type === 'cluster') {
      this.props.deleteCluster(item.id);
      this.props.itemToCreate(null);
    }
    if (item.type === 'item') {
      this.props.deleteIndependentItem(item.id);
      this.props.itemToCreate(null);
    }
  };

  onLike = () => {
    this.setState({ likes: this.state.likes + 1 });
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
                    <div>
                      <div
                        className="cluster-item-title"
                        onClick={this.onClusterItemClick.bind(this, clusterItem.itemId)}
                      >
                        <Icon type="file" />
                        <List.Item.Meta description={`${clusterItem.title.blocks[0].text}`} />
                      </div>
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
    const { clusters, items, selectedClusterIds } = this.props;
    const data = [...clusters, ...items];

    return (
      <div className="toc-card">
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item.type === 'cluster' ? <Icon type="folder" /> : <Icon type="file" />}

              <div onClick={this.itemClicked.bind(this, item)}>
                <List.Item.Meta description={`${item.title.blocks[0].text}`} />
              </div>

              {item.type === 'cluster' ? (
                <Popover placement="top" content="Add File">
                  <div onClick={this.createClusterItem} id={item.id} className="circle" />
                </Popover>
              ) : (
                <Popover content={<div>{this.state.likes} likes</div>}>
                  <Icon type="like" onClick={this.onLike} />
                </Popover>
              )}

              <Popover content={<TOCMore item={item} deleteItem={this.deleteItem} />} placement="right" trigger="hover">
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
