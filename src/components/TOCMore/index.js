import React from 'react';

class TOCMore extends React.Component {
  onDelete = () => {
    this.props.deleteCluster(this.props.clusterId);
  };

  render() {
    return (
      <div className="toc-more">
        <p onClick={this.onDelete}>Delete</p>
        <p>Archive</p>
        <p>Bookmark</p>
      </div>
    );
  }
}

export default TOCMore;
