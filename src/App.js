import React, { useState } from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import SideBar from './SideBar';
import { useStateValue } from './StateProvider';
import Widgets from './Widgets';


function App() {
  const [{ user }, dispatch] = useStateValue();
  return (

    <div className="app">

      {!user ? (<Login />) : (
        <>
          <Header />

          <div className="app__body">


            <SideBar />
            <Feed />
            <Widgets />

          </div>
        </>
      )}



    </div>
  );
}

export default App;
