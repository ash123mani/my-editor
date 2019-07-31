import React from 'react';

import ContentHeading from '../ContentHeading';
import ContentEditor from '../ContentEditor';

class CreateItem extends React.Component {
  state = {
    contentEditorFocused: false
  };

  onConetntEditorFocus = () => {
    this.setState({ contentEditorFocused: !this.state.contentEditorFocused });
  };

  render() {
    const { setClusterTitle, setIndependentItemHeading, setIndependentItemContent } = this.props;

    return (
      <div className='create-item'>
        {this.props.selectedItem === 'item' ? (
          <React.Fragment>
            <ContentHeading
              heading='item'
              onConetntEditorFocus={this.onConetntEditorFocus}
              setIndependentItemHeading={setIndependentItemHeading}
            />
            <ContentEditor
              isContentEditorFocused={this.state.contentEditorFocused}
              onConetntEditorFocus={this.onConetntEditorFocus}
              setIndependentItemContent={setIndependentItemContent}
            />
          </React.Fragment>
        ) : (
            <ContentHeading heading='cluster' setTitle={setClusterTitle} />
          )}
      </div>
    );
  }
}

export default CreateItem;
