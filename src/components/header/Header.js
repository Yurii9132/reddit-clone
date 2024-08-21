import React from 'react';
import "../../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <ul>
          <li><a href="/r/popular" className='active'>Polular</a></li>
          <li><a href="/r/hot" >Hot</a></li>
          <li><a href="/r/rising">Rising</a></li>
          <li><a href="/r/controversial">Controversial</a></li>
          <li><a href="/r/gilded">Gilded</a></li>
        </ul>
      </div>
      <div className="header_right">  
        <FontAwesomeIcon icon={faBell} id="bellIcon" />
        <img src="" alt="" />
        <div className="header_user">
          <span>Username</span>
          <FontAwesomeIcon icon={faCaretDown} id="caretDownIcon" /> 
        </div>
      </div>
    </div>    
  );
};

export default Header;