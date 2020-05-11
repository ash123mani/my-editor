import { ADD_PROFILE_DATA, SHOW_PROFILE_MODAL } from './types';

export const addProfileData = profileData => {
  return {
    type: ADD_PROFILE_DATA,
    payload: profileData,
  };
};

export const showProfileModal = isOpen => {
  return {
    type: SHOW_PROFILE_MODAL,
    payload: isOpen,
  };
};
