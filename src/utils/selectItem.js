export default {
  getArticleData: (section, data, clusterItemId) => {
    data.map(item => {
      if (item.itemId === clusterItemId) {
        return section === 'title' ? item.title : item.content; 
      }
    });
  }
};
