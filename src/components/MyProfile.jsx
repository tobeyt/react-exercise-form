import React, { Component } from "react";
import "./myProfile.less";

class MyProfile extends Component {
  state = {
    name: "",
    gender: "Male",
    description: "",
    read: false,
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleGenderChange = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleReadChange = (event) => {
    this.setState({
      read: event.target.checked,
    });
  };

  render() {
    return (
      <form>
        <div className="title">My Profile</div>

        <div className="subtitle">Name</div>
        <input type="text" onChange={this.handleNameChange} className="name" placeholder="Your name"/>

        <div className="subtitle">Gender</div>
        <select
          value={this.state.gender}
          onChange={this.handleGenderChange}
          className="gender"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <div className="subtitle">Description</div>
        <textarea
          value={this.state.description}
          onChange={this.handleDescriptionChange}
          className="description"
          placeholder="Description about yourself"
        >
          Description about yourself
        </textarea>

        <div>
          <input
            type="checkbox"
            checked={this.state.read}
            onChange={this.handleReadChange}
            className="read"
          />
          <span className="readme">I have read the terms of conduct</span>
        </div>
        <input
          type="submit"
          value="Submit"
          onClick={this.handleSubmit}
          className="submit"
          disabled={
            !this.state.name || !this.state.read || !this.state.description
          }
        />
      </form>
    );
  }
}

export default MyProfile;
