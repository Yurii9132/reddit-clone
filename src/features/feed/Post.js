import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Post.css";

const Post = ({ post }) => {
  // const { upvote, image, title, user, subreddit, comments_count } = props.post;
  return (
    <div className="post">
      <div className="post_left">
        <FontAwesomeIcon icon={faCaretUp} />
        <span>{post.ups}</span>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>
      <div className="post_center">
        <img src={post.url} alt="post-image" />
      </div>
      <div className="post_right">
        <h3>{post.title}</h3>
        <span className="post_info">{post.author}</span>
        <p className="post_info">{post.selftext}</p>
      </div>
    </div>
  );
};

export default Post;
