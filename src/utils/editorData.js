export default {
  getArticleData: (section, data, clusterItemId) => {
    return data.filter(item => {
      if (item.itemId === clusterItemId) {
        return section === 'title' ? item.title : item.content;
      }
    });
  },
};
