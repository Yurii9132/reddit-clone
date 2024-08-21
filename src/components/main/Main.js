import React from 'react';
import "../../styles/Main.css";
import Header from '../../components/header/Header';  
import Feed from '../../features/feed/Feed';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <Feed />
    </div>
  );
};

export default Main;