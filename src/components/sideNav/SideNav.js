import React, { useEffect } from "react";
import "../../styles/SideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectAllSubreddits } from "../../features/subreddits/subredditSlice";
import { loadSubreddits } from "../../features/subreddits/subredditSlice";
import SubredditButton from "../../features/subreddits/SubredditButton";
import { selectSelectedSubreddit } from "../../features/feed/redditSlice";

const SideNav = () => {
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  console.log(selectedSubreddit);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSubreddits());
  }, [dispatch]);
  const subreddits = useSelector(selectAllSubreddits);
  // console.log(subreddits);
  const menus = [
    { to: "/r/popular", text: "Popular" },
    { to: "/r/all", text: "All" },
    { to: "/r/random", text: "Random" },
  ];

  return (
    <div className="sidenav">
      <div className="sidenav_logo">
        <img src="/Reddit_logo_full_1.png" alt="" />
      </div>

      <div className="sidenav_search">
        <input type="text" name="search" placeholder="Search" />
        <FontAwesomeIcon icon={faSearch} id="searchIcon" />
      </div>

      <div className="sidenav_link">
        <ul className="sidenav_menu">
          {menus.map((menu, index) => (
            <li key={index}>
              <a href={menu.to}>{menu.text}</a>
            </li>
          ))}
        </ul>
        <hr />
        <ul className="sidenav_subreddit">
          {subreddits.map((subreddit, index) => {
            console.log(subreddit.url);

            return (
              <li
                className={`${
                  subreddit.url === selectedSubreddit && `selected-subreddit`
                }`}
                key={index}
              >
                <SubredditButton subreddit={subreddit} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
