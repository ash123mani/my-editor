import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Icon, Menu, Dropdown, Popover } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>Delete</Menu.Item>
    <Menu.Item>Bookmark</Menu.Item>
    <Menu.Item>Archive</Menu.Item>
  </Menu>
);

class TOCCard extends React.Component {
  createClusterItem = event => {
    console.log('id of parent is', event.target.id);
    this.props.itemToCreate('clusterItem');
    this.props.setSelectedId(event.target.id);
  };

  render() {
    const { clusters, items, itemType } = this.props;
    const data = [...clusters, ...items];

    return (
      <div className='toc-card'>
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={item => (
            <List.Item>
              {item.type === 'cluster' ? <Icon type='copyright' /> : <Icon type='info-circle' />}
              <List.Item.Meta description={`${item.title.blocks[0].text}`} />

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
              {/* <h4>Hi</h4> */}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TOCCard;
