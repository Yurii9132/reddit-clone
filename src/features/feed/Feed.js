import React, { useEffect } from "react";
import "../../styles/Posts.css";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "./redditSlice";
import { selectSelectedSubreddit } from "./redditSlice";
import { selectAllPosts } from "./redditSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const subredditUrl = useSelector(selectSelectedSubreddit);
  useEffect(() => {
    console.log("loadPosts");
    dispatch(loadPosts(subredditUrl));
  }, [dispatch, subredditUrl]);
  const posts = useSelector(selectAllPosts);

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
