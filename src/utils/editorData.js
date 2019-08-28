import { EditorState, convertFromRaw } from 'draft-js';

export default {
  getArticleData(section, data, id) {
    return data.filter(item => {
      if (item.itemId === id || item.id === id) {
        return section === 'title' ? item.title : item.content;
      }
      return null;
    });
  },

  getEditorState(stateType, items, id) {
    const rawStateTitle = this.getArticleData(stateType, items, id);
    const contentState =
      stateType === 'title' ? convertFromRaw(rawStateTitle[0].title) : convertFromRaw(rawStateTitle[0].content);

    const eState = EditorState.createWithContent(contentState);

    return eState;
  },
};
