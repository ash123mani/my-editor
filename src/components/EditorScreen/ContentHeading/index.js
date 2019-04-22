import React from "react";
import { Editor, EditorState, convertToRaw, convertFromRaw, getDefaultKeyBinding } from "draft-js";

class ContentHeading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorStateTwo: EditorState.createEmpty()
    };

    const content = window.localStorage.getItem("headingContent");

    if (content) {
      this.state.editorStateOne = EditorState.createWithContent(convertFromRaw(JSON.parse(content)));
    } else {
      this.state.editorStateOne = EditorState.createEmpty();
    }
  }

  componentDidUpdate() {
    this.focus();
  }

  componentDidMount() {
    this.focus();
  }

  saveContent = headingContent => {
    window.localStorage.setItem("headingContent", JSON.stringify(convertToRaw(headingContent)));
  };

  onChangeOne = editorState => {
    if (this.props.heading === "cluster") {
      const contentState = editorState.getCurrentContent();
      this.saveContent(contentState);
      console.log("contentheading current editor state", convertToRaw(contentState));
      this.setState({
        editorStateOne: editorState
      });
    } else {
      this.setState({
        editorStateTwo: editorState
      });
    }
  };

  keyBindingFn = e => {
    if (e.keyCode === 13) {
      return "enter-pressed";
    }
    return getDefaultKeyBinding(e);
  };

  handleKeyCommand = command => {
    console.log("command", command);
    if (command) {
      return "handled";
    }
    return "not-handled";
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
        {this.props.heading === "cluster" ? (
          <Editor
            onChange={this.onChangeOne}
            editorState={this.state.editorStateOne}
            handleKeyCommand={this.handleKeyCommand}
            keyBindingFn={this.keyBindingFn}
            ref={element => {
              this.editor = element;
            }}
          />
        ) : (
          <Editor
            onChange={this.onChangeOne}
            editorState={this.state.editorStateTwo}
            // handleKeyCommand={this.handleKeyCommand}
            // keyBindingFn={this.keyBindingFn}
            ref={element => {
              this.editor = element;
            }}
          />
        )}
      </div>
    );
  }
}

export default ContentHeading;
