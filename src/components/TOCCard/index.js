import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Icon, Menu, Dropdown, Popover, Card } from 'antd';

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
    console.log('id of parent is', event.target.id);
    this.props.itemToCreate('clusterItem');
    this.props.setSelectedId(event.target.id);
  };

  itemClicked = (slectedItemId, event) => {
    this.props.setSelectedId(slectedItemId);
    if (this.props.selectedClusterIds.indexOf(slectedItemId) === -1) {
      this.props.setSelectedClusterId(slectedItemId);
      this.setState({ isItemClicked: true });
    } else if (this.props.selectedStuffId === slectedItemId) {
      this.props.setSelectedClusterId(slectedItemId);
      this.setState({ isItemClicked: false });
    }
  };

  renderItemClusters = item => {
    return (
      <div className='cluster-item'>
        {this.props.clusterItems.map(clusterItem => {
          if (clusterItem.parentId === item.id) {
            const data = [clusterItem.title.blocks[0].text];
            return (
              <React.Fragment>
                <List
                  itemLayout='horizontal'
                  dataSource={data}
                  renderItem={item => (
                    <div className='cluster-item-title'>
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
    const { clusters, items, clusterItems, selectedStuffId, selectedClusterIds } = this.props;
    const { isItemClicked } = this.state;
    const data = [...clusters, ...items];

    return (
      <div className='toc-card'>
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item.type === 'cluster' ? <Icon type='copyright' /> : <Icon type='info-circle' />}

              <div onClick={this.itemClicked.bind(this, item.id)} id='title' data-id={item.id}>
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

              {isItemClicked && selectedClusterIds.includes(selectedStuffId) && selectedStuffId === item.id
                ? this.renderItemClusters(item)
                : null}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TOCCard;
