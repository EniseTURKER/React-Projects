import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    job: "",
  };

  render() {
    const handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
      console.log(event.target.name);
      console.log(this.state);
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      this.props.updateNames(this.state);
    };
    return (
      
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={this.state.name}
          />
          <label htmlFor="job">Job</label>
          <input
            type="text"
            name="job"
            id="job"
            onChange={handleChange}
            value={this.state.job}
          />
          <button type="submit">Submit</button>
        </form>
       
    );
  }
}

export default Form;
