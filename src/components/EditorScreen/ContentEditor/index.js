import React from "react";
import { Editor, EditorState } from "draft-js";

class ContentEditor extends React.Component {
  state = {
    editorStateTwo: EditorState.createEmpty()
  };

  onChangeTwo = editorState => {
    this.setState({
      editorStateTwo: editorState
    });
  };

  render() {
    return (
      <div className='create-item__content'>
        <Editor onChange={this.onChangeTwo} editorState={this.state.editorStateTwo} />
      </div>
    );
  }
}

export default ContentEditor;
