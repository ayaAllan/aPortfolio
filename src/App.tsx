import React from 'react';
import logo from './logo.svg';
import './App.css';
//components
import MyNavbar from "./components/navbar/navbar.component";
import MyCarousel from "./components/carousel/carousel.component";
import MyTitleMessage from "./components/title-message/title-message.component";
import MyScrollDown from "./components/scroll-down/scroll-down.component";
const App = () =>  {
  return (
    <div>
      <MyNavbar/>
      <MyCarousel/>
      <MyTitleMessage/>
      Anas' Portfolio
    </div>
  );
}

export default App;
