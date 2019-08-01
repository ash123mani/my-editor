import React from 'react';
import { Editor, EditorState, convertToRaw, convertFromRaw, getDefaultKeyBinding, ContentState } from 'draft-js';

const contentStae = ContentState.createFromText('Title Please....');

class ContentHeading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorStateOne: EditorState.createWithContent(contentStae)
    };
  }

  componentDidMount() {
    this.focus();
  }

  componentDidUpdate() {
    this.focus();
  }

  onChangeHeading = editorState => {
    this.setState({
      editorStateOne: editorState
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
    console.log('hijiji @@@@@@@@@@@@@', this.editor);
    this.editor.focus();
  };

  render() {
    return (
      <div className='create-item__name'>
        <div className='tag'>
          <div className='tag-name'>Add Item</div>
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
