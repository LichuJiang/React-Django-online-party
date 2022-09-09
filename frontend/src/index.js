import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './components/HomePage';
import RoomJoinPage from './components/RoomJoinPage';
import CreateRoomPage from './components/CreateRoomPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>   
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="join" element={<RoomJoinPage />} />
          <Route path="create" element={<CreateRoomPage />} />
    </Routes>
    </BrowserRouter>
  </div>
);

