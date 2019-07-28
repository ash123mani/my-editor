import React from 'react';
import { Editor, EditorState, convertToRaw, convertFromRaw, getDefaultKeyBinding } from 'draft-js';

class ContentHeading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorStateTwo: EditorState.createEmpty(),
      editorStateOne: EditorState.createEmpty()
    };
  }

  componentDidUpdate() {
    this.focus();
  }

  componentDidMount() {
    this.focus();
  }

  onChangeHeading = editorState => {
    if (this.props.heading === 'cluster') {
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
      return 'enter-pressed';
    }
    return getDefaultKeyBinding(e);
  };

  handleKeyCommand = command => {
    if (command === 'enter-pressed') {
      const contentState = this.state.editorStateOne.getCurrentContent();
      this.props.setTitle(convertToRaw(contentState));
      this.setState({
        editorStateOne: EditorState.createEmpty()
      });
      return 'handled';
    }
    return 'not-handled';
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
        {this.props.heading === 'cluster' ? (
          <Editor
            onChange={this.onChangeHeading}
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
