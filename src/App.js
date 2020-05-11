import React, { Component } from 'react';
import Header from './containers/Header';
import Options from './containers/Options';
import EditorScreenWrapper from './containers/EditorScreenWrapper';
import Profile from './containers/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Options />
        <EditorScreenWrapper />
        <Profile />
      </div>
    );
  }
}

export default App;
