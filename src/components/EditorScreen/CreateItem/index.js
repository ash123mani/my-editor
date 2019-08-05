import React from 'react';
import { Button } from 'antd';

import ContentHeading from '../ContentHeading';
import ContentEditor from '../ContentEditor';

class CreateItem extends React.Component {
  state = {
    contentEditorFocused: false,
    size: 'large'
  };

  onConetntEditorFocus = () => {
    this.setState({ contentEditorFocused: !this.state.contentEditorFocused });
  };

  onSubmitItem = () => {
    const data = {
      title: this.props.currentItemHeading,
      content: this.props.currentItemContent
    };

    if (this.props.selectedItem === 'item') {
      this.props.createItemContent(data);
    } else {
      const clusterItemData = {
        parentId: this.props.selectedTypeId,
        data: {
          title: this.props.currentItemHeading,
          content: this.props.currentItemContent
        }
      };
      this.props.setClusterItem(clusterItemData);
    }

    this.props.itemToCreate('');
  };

  render() {
    const {
      setClusterTitle,
      setIndependentItemHeading,
      setIndependentItemContent,
      itemToCreate,
      selectedItem,
    } = this.props;
    const { size } = this.state;

    return (
      <div className='create-item'>
        {this.props.selectedItem !== 'cluster' ? (
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
              selectedItem={selectedItem}
            />
            <div className='create-item__submit-button'>
              <Button type='dashed' size={size} onClick={this.onSubmitItem}>
                Save It
              </Button>
            </div>
          </React.Fragment>
        ) : (
          <ContentHeading heading='cluster' setTitle={setClusterTitle} itemToCreate={itemToCreate} />
        )}
      </div>
    );
  }
}

export default CreateItem;
