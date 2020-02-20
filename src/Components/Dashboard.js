import React, { Component } from "react";
import PostDisplay from "./PostDisplay";
import axios from 'axios'
import { connect } from 'react-redux'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      userInput: ""
    };
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = () => {
    let {user_id} = this.props.user

    axios
      .get(`/api/posts/${user_id}`)
      .then( res => {
        this.setState({
          posts: res.data,
        })
      })
      .catch( err => console.log(err))
  };

  handleChange = e => {
    this.setState({
      userInput: e.target.value,
    })
  };

  submitNewPost = () => {
    let {user_id} = this.props.user
    axios
      .post(`/api/posts/${user_id}`, {
        post: this.state.userInput
      })
      .then(() => {
        this.getPosts()
      })
      .catch( err => console.log(err))
  };

  handleEdit = (post_id, text) => {
    axios
      .put(`/api/posts/${post_id}`, { text })
      .then(() => {
        this.getPosts()
      })
      .catch( err => console.log(err))
  };

  handleDelete = (post_id) => {
    axios
      .delete(`/api/posts/${post_id}`)
      .then(() => {
        this.getPosts()
      })
      .catch( err => console.log(err))
  };

  render() {
    const mappedPosts = this.state.posts.map((el, index) => {
      return (
        <PostDisplay
          key={index}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          post={el}
        />
      );
    });
    return (
      <>
        <div className="input-container">
          <textarea
            id="new-post"
            cols="60"
            rows="2"
            placeholder="New post..."
            value={this.state.userInput}
            onChange={e => {
              this.handleChange(e);
            }}
          />
          <button
            onClick={() => this.submitNewPost()}
            className="input-container-button"
          >
            Post
          </button>
        </div>

        <section className="app-body">
          <div className="padding"/>
          <ul className="flex-vertical-center post-feed">{mappedPosts}</ul>
        </section>
      </>
    );
  }
}

const mapStateToProps = reduxState => {
  const { user } = reduxState
  return {
    user
  }
}

export default connect(mapStateToProps)(Dashboard);
