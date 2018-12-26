import React from "react";
import { connect } from "react-redux";

import CreateItem from "../../../components/EditorScreen/CreateItem";

class ContentScreen extends React.Component {
  render() {
    return (
      <div className='content-screen'>
        <div className='content-screen__wrapper'>
          {!this.props.selectedItem ? (
            <div className='content-screen--empty'>
              <h1>Select an item or cluster</h1>
            </div>
          ) : (
            <CreateItem selectedItem={this.props.selectedItem} />
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = state => {
  return {
    selectedItem: state.createItemReducer.selectedItem
  };
};

export default connect(
  mapDispatchToProps,
  null
)(ContentScreen);
