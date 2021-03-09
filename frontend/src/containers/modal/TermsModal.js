// import React from "react";
// import { Modal, Button } from "react-bootstrap";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import * as actions from "../template/AppTemplateActions";

// function TermsModal() {
//   return (
//     <Modal show>
//       <Modal.Header closeButton>
//         <Modal.Title>Modal heading</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={this.props.actions.showModal}>Close</Button>
//         <Button variant="primary">Save Changes</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(actions, dispatch),
// });

// export default connect(undefined, mapDispatchToProps)(TermsModal);

import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import * as actions from "../template/AppTemplateActions";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

class TermsModal extends Component {
  render() {
    return (
      <Modal show>
        <Modal.Header closeButton onClick={this.props.actions.hideModal}>
          <Modal.Title>Terms & Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is terms and conditions modal.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.actions.hideModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = ({ appState }) => ({
  authenticated: appState.authenticated,
  showModal: appState.showModal,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TermsModal)
);
