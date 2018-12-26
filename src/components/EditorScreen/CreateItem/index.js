import React from "react";

import ContentHeading from "../ContentHeading";
import ContentEditor from "../ContentEditor";

class CreateItem extends React.Component {
  render() {
    return (
      <div className='create-item'>
        {this.props.selectedItem === "item" ? (
          <React.Fragment>
            <ContentHeading />
            <ContentEditor />
          </React.Fragment>
        ) : (
          <ContentHeading />
        )}
      </div>
    );
  }
}

export default CreateItem;
