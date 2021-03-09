import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Glyphicon,
  Row,
} from "react-bootstrap";
import * as actions from "./CertificatesApi";

class Certificate extends Component {
  handleNameChange = (e) => {
    const { resource } = this.state;
    this.setState({ resource: { ...resource, name: e.target.value } });
  };
  handleDescriptionChange = (e) => {
    const { resource } = this.state;
    this.setState({ resource: { ...resource, description: e.target.value } });
  };
  handleUserIdChange = (e) => {
    const { resource } = this.state;
    this.setState({ resource: { ...resource, user_id: e.target.value } });
  };
  saveCertificate = (e) => {
    e.preventDefault();

    const { resource } = this.state;

    const validationErrors = {};
    if (Object.keys(resource).length > 0) {
      if (!resource.name || resource.name.length < 3)
        validationErrors.name = "invalid name";
      if (!resource.description || resource.description.length < 10)
        validationErrors.description = "invalid description";
      if (!resource.user_id) validationErrors.user_id = "not chosen user";
    }
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ validationErrors });
    } else {
      this.props.actions.saveCertificate(resource, () => {
        this.context.router.history.push("/certificates");
      });
    }
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      resource: {
        name: "",
        description: "",
        user_id: 1
      },
      validationErrors: {},
      previousCertificateName: "",
      previousCertificateDesc: "",
      previousCertificateUserId: "",
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id != null) {
      this.loadCertificate(id);
    } else {
      this.setState({ resource: {} });
    }
  }

  loadCertificate(id) {
    this.props.actions.loadCertificate(id, (resource) =>
      this.setState({
        resource: resource,
        previousCertificateName: resource.name,
        previousCertificateDescription: resource.description,
        previousCertificateUserId: resource.user_id,
      })
    );
  }

  getValidationState(id) {
    const { validationErrors } = this.state;
    if (validationErrors.name && id === "name") {
      return "error";
    }
    if (validationErrors.description && id === "description") {
      return "error";
    }
    if (validationErrors.user_id && id === "user_id") {
      return "error";
    }
    return null;
  }

  render() {
    const {
      resource,
      validationErrors,
      previousCertificateName,
      previousCertificateDescription,
      previousCertificateUserId,
    } = this.state;

    return (
      <div>
        {resource && (
          <Row className="vertical-middle breadcrumbs">
            <Col xs={8}>
              <h5>
                <Glyphicon glyph="cog" /> Certificates >{" "}
                {resource.id ? (
                  <span>
                    <b>{previousCertificateName}</b> - edit
                  </span>
                ) : (
                  <span>New</span>
                )}
              </h5>
            </Col>
          </Row>
        )}
        {resource && (
          <Row id="form">
            <Col xs={12} md={6}>
              <Form horizontal onSubmit={this.saveCertificate}>
                <FormGroup
                  controlId="name"
                  validationState={this.getValidationState("name")}
                >
                  <Col componentClass={ControlLabel} sm={2}>
                    Name
                  </Col>
                  <Col sm={10}>
                    <FormControl
                      type="text"
                      defaultValue={resource.id ? previousCertificateName : " "}
                      value={resource.name}
                      placeholder="Enter text"
                      onChange={this.handleNameChange}
                    />
                    {Object.keys(validationErrors).length > 0 &&
                      validationErrors.name && (
                        <ControlLabel>{validationErrors.name}</ControlLabel>
                      )}
                  </Col>
                  <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                  controlId="description"
                  validationState={this.getValidationState("description")}
                >
                  <Col componentClass={ControlLabel} sm={2}>
                    Description
                  </Col>
                  <Col sm={10}>
                    <FormControl
                      componentClass="textarea"
                      defaultValue={
                        resource.id ? previousCertificateDescription : " "
                      }
                      value={resource.description}
                      placeholder="Enter text"
                      onChange={this.handleDescriptionChange}
                    />
                    {Object.keys(validationErrors).length > 0 &&
                      validationErrors.description && (
                        <ControlLabel>
                          {validationErrors.description}
                        </ControlLabel>
                      )}
                  </Col>
                  <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                  controlId="user_id"
                  validationState={this.getValidationState("user_id")}
                >
                  <Col componentClass={ControlLabel} sm={2}>
                    UserId
                  </Col>
                  <Col sm={10}>
                    <FormControl
                      componentClass="select"
                      defaultValue={
                        resource.id ? previousCertificateUserId : " "
                      }
                      value={resource.user_id}
                      placeholder="Select User"
                      onChange={this.handleUserIdChange}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </FormControl>
                    {console.log(resource)}
                    {Object.keys(validationErrors).length > 0 &&
                      validationErrors.user_id && (
                        <ControlLabel>{validationErrors.user_id}</ControlLabel>
                      )}
                    <FormControl.Feedback />
                  </Col>
                </FormGroup>
                <Col xsOffset={2} xs={10} className="form-buttons margin10">
                  <Button type="submit" bsStyle={"success"}>
                    Save
                  </Button>
                  <Button
                    bsStyle={"warning"}
                    onClick={() =>
                      this.context.router.history.push(`/certificates`)
                    }
                  >
                    Cancel
                  </Button>
                </Col>
              </Form>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

Certificate.contextTypes = {
  router: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(undefined, mapDispatchToProps)(Certificate);
