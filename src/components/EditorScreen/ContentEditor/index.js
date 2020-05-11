import React from 'react';
import { convertToRaw, EditorState } from 'draft-js';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';

import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js/dist/Draft.css';

import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import 'draft-js-mention-plugin/lib/plugin.css';
import { mentions } from '../../constants/mention';
import editorData from '../../../utils/editorData';

const inlineToolbarPlugin = createInlineToolbarPlugin();
const mentionPlugin = createMentionPlugin();

const { InlineToolbar } = inlineToolbarPlugin;
const { MentionSuggestions } = mentionPlugin;

const plugins = [inlineToolbarPlugin, mentionPlugin];

const text = 'Type your content here...';

class ContentEditor extends React.Component {
  state = {
    editorStateTwo: createEditorStateWithText(text),
    suggestions: mentions,
    selectedClusterId: null,
    selectedIndependentItemId: null,
    isEditing: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.isContentEditorFocused !== prevProps.isContentEditorFocused) {
      this.editorContent.focus();
      EditorState.moveFocusToEnd(this.state.editorStateTwo);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (
      props.selectedClusterItemId !== state.selectedClusterId &&
      props.selectedItem === 'showClusterItem' &&
      !state.isEditing
    ) {
      console.log('caleed');

      const eState = editorData.getEditorState('content', props.clusterItems, props.selectedClusterItemId);
      return {
        editorStateTwo: eState,
      };
    }

    if (
      props.selectedIndependentItemId !== state.selectedIndependentItemId &&
      props.selectedItem === 'independentItem' &&
      !state.isEditing
    ) {
      console.log('caleed 2');

      const eState = editorData.getEditorState('content', props.items, props.selectedIndependentItemId);
      return {
        editorStateTwo: eState,
      };
    } else {
      console.log('caleed 3');
      return null;
    }
  }

  onChangeTwo = editorState => {
    this.setState({
      editorStateTwo: editorState,
      isEditing: true,
    });

    const contentState = this.state.editorStateTwo.getCurrentContent();
    const rawState = convertToRaw(contentState);
    this.props.setIndependentItemContent(rawState);
  };

  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions),
    });
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
        <MentionSuggestions onSearchChange={this.onSearchChange} suggestions={this.state.suggestions} />
      </div>
    );
  }
}

export default ContentEditor;
