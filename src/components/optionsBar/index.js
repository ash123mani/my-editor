import React from 'react';
import { Icon } from 'antd';

class OptionsBar extends React.Component {
  tabOptions = ['All', 'Recent', 'Board', 'Graph'];

  onClick = e => {
    this.props.setTab(e.target.id);
  };

  options = tab => {
    const classes = ['options-bar__contents-item'];

    if (this.props.selectedTab === tab) {
      classes.push('options-bar__contents-item--selected');
    }

    return (
      <div key={tab} className={classes.join(' ')}>
        <div id={tab} onClick={this.onClick}>
          {tab}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="options-bar">
        <div className="options-bar__items-option">
          <span>Items</span>

          <div>
            <Icon type="right" />
          </div>
        </div>

        <div className="options-bar__contents">
          {this.tabOptions.map(tab => {
            return this.options(tab);
          })}
        </div>
      </div>
    );
  }
}

export default OptionsBar;
