import React from 'react';

import TOCCard from '../../TOCCard';
import TOCHeader from '../../TOCHeader';

class TOCScreen extends React.Component {
  render() {
    const { clusters, itemToCreate } = this.props;

    return (
      <div className='toc-conatiner'>
        <div className='toc-screen'>
          <TOCHeader itemToCreate={itemToCreate} />
          <TOCCard clusters={Object.values(clusters)} />
        </div>
      </div>
    );
  }
}

export default TOCScreen;
