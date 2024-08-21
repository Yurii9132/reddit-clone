import React from "react";
import "../../styles/SubredditButton.css";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedSubreddit } from "../feed/redditSlice"

const SubredditButton = ({ subreddit }) => {
  const dispatch = useDispatch();
  const handleClick = (subredditUrl) => () => {
    dispatch(setSelectedSubreddit(subredditUrl));
  } 
  return (
    <div>
      <button onClick={handleClick(subreddit.url)} className="subreddit_btn">
        <img
          className="subreddit-icon"
          src={subreddit.icon_img || "/NoRedditImage.png"}
          alt={subreddit.display_name}
          style={{border: `3px solid ${subreddit.primary_color || "#d62400"}`}}
        />
        <span>{subreddit.display_name}</span>
      </button>
    </div>
  );
};

export default SubredditButton;
