import React, { Component } from 'react';
import { Icon, Popover } from 'antd';
import 'antd/dist/antd.css';

class TOCHeader extends Component {
  state = {
    clicked: false,
  };

  onClick = e => {
    this.setState({ clicked: true });
  };

  hide = () => {
    this.setState({
      visible: false,
      clicked: true,
    });
    console.log('test');
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  onItemOptionsClick = e => {
    this.props.itemToCreate('item');
  };

  onClusterOptionsClick = e => {
    this.props.itemToCreate('cluster');
  };

  onMininmizeSidebar = e => {
    this.props.sideBarAction(true);
  };

  render() {
    return (
      <React.Fragment>
        <div className="top-bar">
          <div className="top-bar__workspace-name">
            <span>Workspace</span>
          </div>

          <Popover
            content={
              <div onClick={this.hide} className="create-options">
                <div id="item" onClick={this.onItemOptionsClick}>
                  <div className="create-options__item">
                    <Icon type="plus" />
                    <span id="item">Add File</span>
                  </div>
                </div>
                <div id="item" onClick={this.onClusterOptionsClick}>
                  <div className="create-options__item">
                    <Icon type="plus-square" />
                    <span id="cluster">Add Folder</span>
                  </div>
                </div>
              </div>
            }
            trigger="click"
            placement="bottom"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
            overlayClassName="demo-class"
          >
            <Popover content={'Create'} trigger="hover" mouseEnterDelay={0.7} className="demo-class">
              <div className="top-bar__plus" onClick={this.onClick}>
                <Icon type="plus" />
              </div>
            </Popover>
          </Popover>

          <Popover content={'Minimize SideBar'} trigger="hover" mouseEnterDelay={0.7}>
            <div className="top-bar__shrink" onClick={this.onMininmizeSidebar}>
              <Icon type="double-left" />
            </div>
          </Popover>
        </div>
      </React.Fragment>
    );
  }
}

export default TOCHeader;
