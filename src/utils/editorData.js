export default {
  getArticleData: (section, data, id) => {
    return data.filter(item => {
      if (item.itemId === id || item.id === id) {
        return section === 'title' ? item.title : item.content;
      }
    });
  },
};
