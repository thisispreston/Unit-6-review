import React from "react";
import Post from "./Post";
import Edit from "./Edit";

class PostDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  };

  render() {
    const { post_id, text } = this.props.post
    const { handleDelete, handleEdit } = this.props

    return (
      <>
        {this.state.isEditing ? (
          <Edit
            id={post_id}
            text={text}
            toggleEdit={this.toggleEdit}
            handleEdit={handleEdit}
          />
        ) : (
          <Post
          id={post_id}
          text={text}
          toggleEdit={this.toggleEdit}
          handleDelete={handleDelete}
          />
        )}
      </>
    );
  }
}

export default PostDisplay;
