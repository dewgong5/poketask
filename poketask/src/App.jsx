import React, { useState } from 'react';
import Home from './pages/Home.jsx';
import Play from './pages/Play.jsx';
import Garden from './pages/PokeGarden.jsx';
import Shop from './pages/Shop.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';

import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  const [ID, setID] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home identity={ID} setIdentity={setID} />} />
        <Route path="/play" element={<Play identity={ID} setIdentity={setID}/>} />
        <Route path="/pokegarden" element={<Garden identity={ID} setIdentity={setID}/>} />
        <Route path="/shop" element={<Shop identity={ID} setIdentity={setID}/>} />
        <Route path="/login" element={<Login identity={ID} setIdentity={setID}/>} />
        <Route path="/signup" element={<SignUp identity={ID} setIdentity={setID}/>} />
      </Routes>
    </BrowserRouter>
  );
}