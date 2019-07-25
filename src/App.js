import React, { Component } from "react";
import Header from "./components/header";
import Options from "./containers/Options";
import EditorScreenWrapper from "./containers/EditorScreenWrapper";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Options />
         <EditorScreenWrapper />
      </div>
    );
  }
}

export default App;
