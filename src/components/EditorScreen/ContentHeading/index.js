import React from "react";
import { Editor, EditorState } from "draft-js";

class ContentHeading extends React.Component {
  state = {
    editorStateOne: EditorState.createEmpty()
  };

  componentDidMount() {
    this.focus();
  }

  onChangeOne = editorState => {
    console.log("current editor state", this.state.editorState);
    this.setState({
      editorStateOne: editorState
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    return (
      <div className='create-item__name'>
        <div className='tag'>
          <div className='tag-name'>Add Item</div>
        </div>
        <Editor
          onChange={this.onChangeOne}
          editorState={this.state.editorStateOne}
          ref={element => {
            this.editor = element;
          }}
        />
      </div>
    );
  }
}

export default ContentHeading;
