import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Icon, Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>Delete</Menu.Item>
    <Menu.Item>Bookmark</Menu.Item>
    <Menu.Item>Archive</Menu.Item>
  </Menu>
);

class TOCCard extends React.Component {
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
              {item.type === 'cluster' ? <Icon type='plus' /> : <Icon type='like' />}
              <Dropdown overlay={menu}>
                <Icon type='more' />
              </Dropdown>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TOCCard;
