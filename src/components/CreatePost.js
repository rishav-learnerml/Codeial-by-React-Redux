import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createPost } from '../actions/posts';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  handleOnClick = () => {
    // Dispatch an action to create a post
    this.props.dispatch(createPost(this.state.content));
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  render() {
    return (
      <div className="create-post">
        <textarea
          className="add-post"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <div>
          <button id="add-post-btn" onClick={this.handleOnClick}>
            Add post
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(CreatePost);