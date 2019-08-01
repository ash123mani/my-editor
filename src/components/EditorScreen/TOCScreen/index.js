import React from 'react';

import TOCCard from '../../TOCCard';
import TOCHeader from '../../TOCHeader';

class TOCScreen extends React.Component {
  render() {
    const { clusters, itemToCreate, items, itemType } = this.props;

    return (
      <div className='toc-conatiner'>
        <div className='toc-screen'>
          <TOCHeader itemToCreate={itemToCreate} />
          <TOCCard clusters={Object.values(clusters)} items={Object.values(items)} itemType={itemType} />
        </div>
      </div>
    );
  }
}

export default TOCScreen;
