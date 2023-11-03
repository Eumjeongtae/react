import React, { Children, useState } from "react";
import NavBar from "./components/NavBar";
import './App.css';
import Avata from './components/Avata';
import AppToggle from './AppToggle';
import HeaderImg from './components/HeaderImg';
import HeaderSearch from './components/HeaderSearch';
import Content from './components/Content';
import OliveYoung from './components/OliveYoung';
export default function AppWrap() {
  return (
    <>
      <NavBar >
        <HeaderImg/>
        <HeaderSearch/>
      </NavBar >
      <Content>
        <OliveYoung/>
      </Content>

      {/* <Footer>
        
      </Footer> */}
    </>
  );
}