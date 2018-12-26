import { connect } from "react-redux";

import { itemToCreate } from "../../../redux/actions/createItemActions";
import TOCScreen from "../../../components/EditorScreen/TOCScreen";

const mapDispatchToProps = dispatch => {
  return {
    itemToCreate: item => dispatch(itemToCreate(item))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TOCScreen);
