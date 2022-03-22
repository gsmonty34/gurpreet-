import React from 'react';
import Logout_page from './components/Logout_page';
import Login_form from './components/Login_form';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route  path = '/' element ={<Login_form/>} />
        <Route  path = '/welcome' element ={<Logout_page/>}/>

      </Routes>
    </>

  );
}

export default App;
