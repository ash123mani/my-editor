import React from "react";

import ContentHeading from "../ContentHeading";
import ContentEditor from "../ContentEditor";

class CreateItem extends React.Component {
  render() {
    const { setClusterTitle } = this.props;
    return (
      <div className="create-item">
        {this.props.selectedItem === "item" ? (
          <React.Fragment>
            <ContentHeading heading="item" />
            <ContentEditor />
          </React.Fragment>
        ) : (
          <ContentHeading heading="cluster" setTitle={setClusterTitle} />
        )}
      </div>
    );
  }
}

export default CreateItem;
