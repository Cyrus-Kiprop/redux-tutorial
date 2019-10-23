import React, { Component } from "react";
import { connect } from "react-redux";
import { newPost } from "../actions/postActions";
import PropTypes from "prop-types";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
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
    this.props.newPost(post);
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

// prop validation
Postform.propTypes = {
  newPost: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

// posts in this case stands for the name assigned to the postReducer in the root reducer
const mapStateToProps = state => ({
  posts: state.posts.item
});

export default connect(
  mapStateToProps,
  { newPost }
)(Postform);
