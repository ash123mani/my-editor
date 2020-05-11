import { connect } from 'react-redux';

import Profile from '../../components/Profile';
import { addProfileData, showProfileModal } from '../../redux/actions/profile';

const mapStateToProps = state => {
  const { profile } = state;
  return {
    isModalOpen: profile.showProfileModal,
    firstName: profile.firstName,
    lastName: profile.lastName,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProfileData: profileData => dispatch(addProfileData(profileData)),
    showProfileModal: isOpen => dispatch(showProfileModal(isOpen)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
