import React from 'react';
import { Editor, EditorState, convertToRaw, getDefaultKeyBinding, ContentState, convertFromRaw } from 'draft-js';

import editorData from '../../../utils/editorData';
import editorUtils from '../../../utils/editorUtlis';

const contentState = ContentState.createFromText('Title');

class ContentHeading extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editorStateOne: editorUtils.moveSelectionToEnd(EditorState.createWithContent(contentState)),
      selectedClusterId: null,
      selectedIndependentItemId: null,
      currentlySelectedId: null,
      selectedItem: null,
    };
  }

  componentDidMount() {
    if (!this.state.selectedClusterId) {
      this.focus();
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.currentlySelectedId !== state.currentlySelectedId && props.selectedItem !== state.selectedItem) {
      const data = props.selectedItem === 'showClusterItem' ? props.clusterItems : props.items;

      const eState = editorData.getEditorState('title', data, props.currentlySelectedId);
      return {
        editorStateOne: eState,
        selectedClusterId: props.selectedClusterItemId,
        selectedIndependentItemId: props.selectedIndependentItemId,
        currentlySelectedId: props.currentlySelectedId,
        selectedItem: props.selectedItem,
      };
    }

    // if (
    //   props.selectedIndependentItemId !== state.selectedIndependentItemId &&
    //   props.selectedItem === 'independentItem'
    // ) {
    //   const eState = editorData.getEditorState('title', props.items, props.selectedIndependentItemId);
    //   return {
    //     editorStateOne: eState,
    //     selectedClusterId: props.selectedClusterItemId,
    //     selectedIndependentItemId: props.selectedIndependentItemId,
    //   };
    // }
    else {
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
