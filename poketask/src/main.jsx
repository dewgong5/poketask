import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx';
import Play from './pages/Play.jsx';
import Garden from './pages/PokeGarden.jsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScoreProvider } from './components/Score.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScoreProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/pokegarden" element={<Garden />} />
        </Routes>
      </ScoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
