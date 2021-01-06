import React from "react";

class BadgeForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    console.log("Botton was clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First Name"
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last Name"
              value={this.state.lastName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control"
              placeholder="email"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="jobTitle"
              className="form-control"
              placeholder="job title"
              value={this.state.jobTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="twitter"
              className="form-control"
              placeholder="twitter"
              value={this.state.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
