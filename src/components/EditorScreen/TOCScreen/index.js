import React from "react";
import { Icon, Popover } from "antd";
import "antd/dist/antd.css";

class TOCScreen extends React.Component {
  render() {
    return (
      <div className='toc-conatiner'>
        <div className='toc-screen'>
          <div className='top-bar'>
            <div className='top-bar__workspace-name'>
              <span>Workspace</span>
            </div>

            <Popover content={"Create"} title='' trigger='hover'>
              <div className='top-bar__plus'>
                <Icon type='plus' />
              </div>
            </Popover>

            <Popover content={"Maximize SideBar"} title='' trigger='hover'>
              <div className='top-bar__expand'>
                <Icon type='fullscreen' />{" "}
              </div>
            </Popover>

            <Popover content={"Minimize SideBar"} title='' trigger='hover'>
              <div className='top-bar__shrink'>
                <Icon type='double-left' />
              </div>
            </Popover>
          </div>
        </div>
      </div>
    );
  }
}

export default TOCScreen;
