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

class ContentEditor extends React.Component {
  state = {
    editorStateTwo: createEditorStateWithText(text),
  };

  componentDidUpdate(prevProps) {
    if (this.props.isContentEditorFocused !== prevProps.isContentEditorFocused) {
      this.editorContent.focus();
      EditorState.moveFocusToEnd(this.state.editorStateTwo);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.selectedClusterItemId !== state.selectedClusterItemId && props.selectedItem === 'showClusterItem') {
      const rawStateTitle = editorData.getArticleData('content', props.clusterItems, props.selectedClusterItemId);
      const contentState = convertFromRaw(rawStateTitle[0].content);

      const eState = EditorState.createWithContent(contentState);
      return {
        editorStateTwo: eState,
        selectedClusterId: null,
      };
    } else {
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
