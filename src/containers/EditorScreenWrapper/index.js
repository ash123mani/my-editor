import React from "react";
import TOCScreen from "./TOCScreen/index";
import ContentScreen from "./ContentScreen/index";

const EditorScreenWrapper = () => {
  return (
    <div className='editor-screen'>
      <TOCScreen />
      <ContentScreen />
    </div>
  );
};

export default EditorScreenWrapper;
