import React from 'react';
import { convertToRaw, EditorState, convertFromRaw } from 'draft-js';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';

import editorData from '../../../utils/editorData';

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];

const text = 'In this editor a toolbar shows up once you select part of the text …';

class ContentEditor extends React.PureComponent {
  state = {
    editorStateTwo: createEditorStateWithText(text),
    selectedClusterId: null,
    selectedIndependentItemId: null,
    currentlySelectedId: null,
    selectedItem: null,
  };

  componentDidUpdate(prevProps) {
    if (this.props.isContentEditorFocused !== prevProps.isContentEditorFocused) {
      this.editorContent.focus();
      EditorState.moveFocusToEnd(this.state.editorStateTwo);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.currentlySelectedId !== state.currentlySelectedId && props.selectedItem !== state.selectedItem) {
      console.log('inide lnffl', props, state);

      const data = props.selectedItem === 'showClusterItem' ? props.clusterItems : props.items;

      const eState = editorData.getEditorState('content', data, props.currentlySelectedId);
      return {
        editorStateTwo: eState,
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
    //   const eState = editorData.getEditorState('content', props.items, props.selectedIndependentItemId);
    //   return {
    //     editorStateTwo: eState,
    //     selectedClusterId: props.selectedClusterItemId,
    //     selectedIndependentItemId: props.selectedIndependentItemId,
    //   };
    // }
    else {
      return null;
    }
  }

  onChangeTwo = editorState => {
    this.setState({
      editorStateTwo: editorState,
    });

    const contentState = this.state.editorStateTwo.getCurrentContent();
    const rawState = convertToRaw(contentState);
    this.props.setIndependentItemContent(rawState);
  };

  render() {
    return (
      <div className="create-item__content">
        <Editor
          onChange={this.onChangeTwo}
          editorState={this.state.editorStateTwo}
          plugins={plugins}
          ref={element => {
            this.editorContent = element;
          }}
        />
        <InlineToolbar />
      </div>
    );
  }
}

export default ContentEditor;
