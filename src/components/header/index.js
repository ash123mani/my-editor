import React from 'react';
import { Icon, Popover } from 'antd';

const Header = props => {
  const { showProfileModal, profileIconData } = props;
  console.log('yolo', props);

  return (
    <div className="header">
      <div className="header__menu-fold">
        <Icon type="menu-fold" />
      </div>

      <div className="header__icon">
        <Icon type="desktop" />
        <span>My Editor</span>
      </div>

      <div className="header__search">
        <div className="header__search-icon">
          <Icon type="search" />
        </div>

        <div className="header__search-input">
          <input type="search" placeholder="Workspace" />
        </div>
      </div>

      <div className="header__suggestions">
        {/* <div>
          <Icon type="user-add" />
          <span>Invite People</span>
        </div>

        <div className="header__suggestions-star-icon">
          <Icon type="star" />
          <span>Upgrade</span>
        </div>

        <Popover content={'Help'} trigger="hover" mouseEnterDelay={0.7}>
          <div className="header__suggestions-help">
            <Icon type="question-circle" />
            <span />
          </div>
        </Popover>

        <Popover content={'Notification'} trigger="hover" mouseEnterDelay={0.7}>
          <div className="header__suggestions-notification">
            <Icon type="bell" />
            <span />
          </div>
        </Popover> */}

        <Popover content={'Account'} trigger="hover" mouseEnterDelay={0.7}>
          <div className="header__suggestions-user" onClick={() => showProfileModal(true)}>
            {profileIconData}
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
