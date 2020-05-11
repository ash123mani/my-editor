import React from 'react';

import { Modal, Button, Input } from 'antd';

class Profile extends React.Component {
  state = { firstName: '', lastName: '' };

  handleSubmit = e => {
    const { addProfileData } = this.props;
    console.log('state', this.state);
    const { firstName, lastName } = this.state;
    addProfileData({
      firstName,
      lastName,
    });
  };

  handleCancel = e => {
    const { showProfileModal } = this.props;
    showProfileModal(false);
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  render() {
    const { isModalOpen, firstName, lastName } = this.props;
    const { firstName: fName, lastName: lName } = this.state;
    const isSubmitButtonDisabled = !fName.length || !lName.length;

    return (
      <div>
        <Modal
          title="Profile Details"
          visible={isModalOpen}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={this.handleSubmit} disabled={isSubmitButtonDisabled}>
              Submit
            </Button>,
          ]}
        >
          <div className="profile-input">
            <Input
              placeholder="First Name"
              onChange={this.handleInputChange}
              id="firstName"
              allowClear
              size="large"
              type="text"
              defaultValue={firstName}
            />
          </div>
          <div className="profile-input">
            <Input
              placeholder="Last Name"
              onChange={this.handleInputChange}
              id="lastName"
              allowClear
              size="large"
              type="text"
              defaultValue={lastName}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Profile;
