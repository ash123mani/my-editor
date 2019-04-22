import React from "react";
import { convertToRaw } from "draft-js";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];

const text = "In this editor a toolbar shows up once you select part of the text …";

class ContentEditor extends React.Component {
  state = {
    editorStateTwo: createEditorStateWithText(text)
  };

  onChangeTwo = editorState => {
    const contentState = editorState.getCurrentContent();
    console.log("contenteditor current editor state", convertToRaw(contentState));
    this.setState({
      editorStateTwo: editorState
    });
  };

  render() {
    return (
      <div className='create-item__content'>
        <Editor onChange={this.onChangeTwo} editorState={this.state.editorStateTwo} plugins={plugins} />
        <InlineToolbar />
      </div>
    );
  }
}

export default ContentEditor;
