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
    const data = this.props.clusters;

    return (
      <div className='toc-card'>
        <List
          itemLayout='horizontal'
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Icon type='right' />
              <List.Item.Meta description={`${item.content.blocks[0].text}`} />
              <Icon type='plus' />
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
