import React, { Component } from "react";
import Header from "./components/header";
import Options from "./containers/options";
import EditorScreen from "./components/EditorScreen";
// import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Options />
        <EditorScreen />
      </div>
    );
  }
}

export default App;
