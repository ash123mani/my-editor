import React from 'react';
import { connect } from 'react-redux';

import CreateItem from '../../../components/EditorScreen/CreateItem';
import { setClusterTitle } from '../../../redux/actions/clusterContent';
import { setIndependentItemHeading, setIndependentItemContent } from '../../../redux/actions/independentItems';

class ContentScreen extends React.Component {
  render() {
    const { selectedItem, setClusterTitle, setIndependentItemHeading, setIndependentItemContent } = this.props;

    return (
      <div className='content-screen'>
        <div className='content-screen__wrapper'>
          {!this.props.selectedItem ? (
            <div className='content-screen--empty'>
              <h1>Select an item or cluster</h1>
            </div>
          ) : (
              <CreateItem
                selectedItem={selectedItem}
                setClusterTitle={setClusterTitle}
                setIndependentItemHeading={setIndependentItemHeading}
                setIndependentItemContent={setIndependentItemContent}
              />
            )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setClusterTitle: clusterTitle => dispatch(setClusterTitle(clusterTitle)),
    setIndependentItemHeading: data => dispatch(setIndependentItemHeading(data)),
    setIndependentItemContent: data => dispatch(setIndependentItemContent(data))
  };
};

const mapStateToProps = state => {
  return {
    selectedItem: state.createItem.selectedItem
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentScreen);
