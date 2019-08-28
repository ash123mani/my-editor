import React from 'react';
import { Editor, EditorState, convertToRaw, getDefaultKeyBinding, ContentState, convertFromRaw } from 'draft-js';

import editorData from '../../../utils/editorData';
import editorUtils from '../../../utils/editorUtlis';

const contentState = ContentState.createFromText('Title');

class ContentHeading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorStateOne: editorUtils.moveSelectionToEnd(EditorState.createWithContent(contentState)),
      selectedClusterId: null,
      selectedIndependentItemId: null,
    };
  }

  componentDidMount() {
    if (!this.state.selectedClusterId) {
      this.focus();
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.selectedClusterItemId !== state.selectedClusterItemId && props.selectedItem === 'showClusterItem') {
      const eState = editorData.getEditorState('title', props.clusterItems, props.selectedClusterItemId);
      return {
        editorStateOne: eState,
      };
    } else {
      return null;
    }

    if (
      props.selectedIndependentItemId !== state.selectedIndependentItemId &&
      props.selectedItem === 'independentItem'
    ) {
      const eState = editorData.getEditorState('title', props.items, props.selectedIndependentItemId);
      return {
        editorStateOne: eState,
      };
    } else {
      return null;
    }
  }

  onChangeHeading = editorState => {
    this.setState({
      editorStateOne: editorState,
    });
    const contentState = this.state.editorStateOne.getCurrentContent();
    const rawState = convertToRaw(contentState);

    if (this.props.heading === 'item') {
      this.props.setIndependentItemHeading(rawState);
    }
  };

  keyBindingFn = e => {
    if (e.keyCode === 13) {
      return 'enter-pressed';
    }
    return getDefaultKeyBinding(e);
  };

  handleKeyCommand = command => {
    if (command === 'enter-pressed') {
      const contentState = this.state.editorStateOne.getCurrentContent();
      const rawState = convertToRaw(contentState);

      if (this.props.heading === 'cluster') {
        this.props.setTitle(rawState);
        this.props.itemToCreate('');
      }

      if (this.props.heading === 'item') {
        this.props.onConetntEditorFocus();
      }

      return 'handled';
    }
    return 'not-handled';
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div className="create-item__name" key={this.props.selectedClusterItemId || this.props.selectedItem}>
        <div className="tag">
          <div className="tag-name">Add Item</div>
        </div>
        <Editor
          onChange={this.onChangeHeading}
          editorState={this.state.editorStateOne}
          handleKeyCommand={this.handleKeyCommand}
          keyBindingFn={this.keyBindingFn}
          ref={element => {
            this.editor = element;
          }}
        />
      </div>
    );
  }
}

export default ContentHeading;
