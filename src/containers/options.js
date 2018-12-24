import { connect } from "react-redux";

import OptionsBar from "../components/optionsBar";
import { setTab } from "../redux/actions/setTabActions";

const mapStateToProps = state => {
  return {
    selectedTab: state.selectedTabReducer.selectedTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTab: tab => dispatch(setTab(tab))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsBar);
