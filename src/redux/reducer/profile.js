import { SHOW_PROFILE_MODAL, ADD_PROFILE_DATA } from '../actions/types';

const initialState = {
  showProfileModal: false,
  firstName: '',
  lastName: '',
  profileIconData: '',
};

export const profile = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case SHOW_PROFILE_MODAL:
      return {
        ...state,
        showProfileModal: payload,
      };
    case ADD_PROFILE_DATA:
      return {
        ...state,
        showProfileModal: false,
        firstName: payload.firstName,
        lastName: payload.lastName,
        profileIconData: payload.firstName[0] + payload.lastName[0],
      };
    default:
      return state;
  }
};
