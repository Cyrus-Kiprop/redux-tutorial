import React, { Component } from "react";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    //   do some binding
  }

  // handle onchange events
  handleChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // handlesubmit
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      headers: { "content-stype": "application/JSON" },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(data => console.log(data));
    // .catch(err => alert(err.message));
  };

  render() {
    return (
      <div>
        <h2>Add Posts</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label>Body</label>
            <textarea
              name="body"
              cols="30"
              rows="10"
              value={this.state.body}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
