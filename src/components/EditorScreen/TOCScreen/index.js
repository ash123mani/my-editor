import React from 'react';

import TOCCard from '../../TOCCard';
import TOCHeader from '../../TOCHeader';

class TOCScreen extends React.Component {
  render() {
    const { clusters, itemToCreate, items, itemType, setSelectedId } = this.props;

    return (
      <div className='toc-conatiner'>
        <div className='toc-screen'>
          <TOCHeader itemToCreate={itemToCreate} />
          <TOCCard
            clusters={Object.values(clusters)}
            items={Object.values(items)}
            itemType={itemType}
            itemToCreate={itemToCreate}
            setSelectedId={setSelectedId}
          />
        </div>
      </div>
    );
  }
}

export default TOCScreen;
