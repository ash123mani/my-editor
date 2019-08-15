import React from 'react';
import { Button } from 'antd';
import { Editor, EditorState, convertToRaw, getDefaultKeyBinding, ContentState, convertFromRaw } from 'draft-js';

import ContentHeading from '../ContentHeading';
import ContentEditor from '../ContentEditor';

class CreateItem extends React.PureComponent {
  state = {
    contentEditorFocused: false,
    size: 'large',
  };

  onConetntEditorFocus = () => {
    this.setState({ contentEditorFocused: !this.state.contentEditorFocused });
  };

  onSubmitItem = () => {
    const data = {
      title: this.props.currentItemHeading,
      content: this.props.currentItemContent,
    };

    if (this.props.selectedItem === 'item') {
      this.props.createItemContent(data);
    } else {
      const clusterItemData = {
        parentId: this.props.selectedTypeId,
        data: {
          title: this.props.currentItemHeading,
          content: this.props.currentItemContent,
        },
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
      selectedClusterItemId,
      clusterItems,
      selectedTypeId,
      selectedIndependentItemId,
      items,
    } = this.props;
    const { size } = this.state;

    return (
      <div className="create-item">
        {selectedItem !== 'cluster' ? (
          <React.Fragment key={`${selectedIndependentItemId}--${selectedClusterItemId}--${selectedItem}`}>
            <ContentHeading
              heading="item"
              onConetntEditorFocus={this.onConetntEditorFocus}
              setIndependentItemHeading={setIndependentItemHeading}
              selectedItem={selectedItem}
              selectedClusterItemId={selectedClusterItemId}
              clusterItems={clusterItems}
              selectedTypeId={selectedTypeId}
              onChangeContent={this.onChangeContent}
              selectedIndependentItemId={selectedIndependentItemId}
              items={items}
            />
            <ContentEditor
              isContentEditorFocused={this.state.contentEditorFocused}
              onConetntEditorFocus={this.onConetntEditorFocus}
              setIndependentItemContent={setIndependentItemContent}
              selectedItem={selectedItem}
              selectedClusterItemId={selectedClusterItemId}
              clusterItems={clusterItems}
              selectedTypeId={selectedTypeId}
              selectedIndependentItemId={selectedIndependentItemId}
              items={items}
            />
            {selectedItem !== 'showClusterItem' && selectedItem !== 'independentItem' ? (
              <div className="create-item__submit-button">
                <Button type="dashed" size={size} onClick={this.onSubmitItem}>
                  Save It
                </Button>
              </div>
            ) : null}
          </React.Fragment>
        ) : (
          <ContentHeading heading="cluster" setTitle={setClusterTitle} itemToCreate={itemToCreate} />
        )}
      </div>
    );
  }
}

export default CreateItem;
