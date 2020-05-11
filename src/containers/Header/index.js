import { connect } from 'react-redux';

import Header from '../../components/header';
import { showProfileModal } from '../../redux/actions/profile';

const mapStateToProps = state => {
  const { profile } = state;
  return {
    profileIconData: profile.profileIconData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showProfileModal: isOpen => dispatch(showProfileModal(isOpen)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
