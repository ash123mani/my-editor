import React from 'react';
import 'antd/dist/antd.css';
import { List, Icon, Menu, Dropdown, Popover } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>Delete</Menu.Item>
    <Menu.Item>Bookmark</Menu.Item>
    <Menu.Item>Archive</Menu.Item>
  </Menu>
);

class TOCCard extends React.Component {
  state = {
    isItemClicked: false
  };

  createClusterItem = event => {
    this.props.itemToCreate('clusterItem');
    this.props.setSelectedId(event.target.id);
  };

  itemClicked = (slectedItemId, event) => {
    this.props.setSelectedClusterId(slectedItemId);
  };

  onClusterItemClick = (clusterItemId, event) => {
    this.props.setSelectedClusterItemId(clusterItemId);
  };

  renderItemClusters = item => {
    return (
      <div className='cluster-item'>
        {this.props.clusterItems.map(clusterItem => {
          if (clusterItem.parentId === item.id) {
            const data = [clusterItem.title.blocks[0].text];
            return (
              <React.Fragment key={clusterItem.itemId}>
                <List
                  itemLayout='horizontal'
                  dataSource={data}
                  renderItem={item => (
                    <div
                      className='cluster-item-title'
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
    const { clusters, items, selectedClusterIds } = this.props;
    const data = [...clusters, ...items];

    return (
      <div className='toc-card'>
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item.type === 'cluster' ? <Icon type='copyright' /> : <Icon type='info-circle' />}

              <div onClick={this.itemClicked.bind(this, item.id)}>
                <List.Item.Meta description={`${item.title.blocks[0].text}`} />
              </div>

              {item.type === 'cluster' ? (
                <Popover placement='top' content='Create Item'>
                  <div onClick={this.createClusterItem} id={item.id} className='circle' />
                </Popover>
              ) : (
                <Icon type='like' />
              )}

              <Dropdown overlay={menu}>
                <Icon type='more' />
              </Dropdown>

              {selectedClusterIds && selectedClusterIds.includes(item.id) ? this.renderItemClusters(item) : null}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TOCCard;
