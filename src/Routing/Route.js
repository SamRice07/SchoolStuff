import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Theme from '../Components/Theme/Theme';
import Hitler from '../Components/Hitler/Hitler';
import Timeline from '../Components/Addons/Timeline/Timeline';
import Connection from '../Components/Connection/Connection';
import Cards from '../Components/Addons/Cards/Cards';
import Gatsby from '../Components/Gatsby/Gatsby';
import TwoSide from '../Components/Addons/TwoSide/TwoSide';
import IAm from '../Components/Addons/IAm/IAm';
import Visual from '../Components/Visual/Visual';
import Modal from '../Components/Test/Modal';
import Caroseul from '../Components/Addons/Caroseul/Caroseul';
import Slider from '../Components/Addons/Carosel/Carosel';
import Synthesis from '../Components/Synthesis/Synthesis';
import Chat from '../Components/ChatGPT/Chat';

export default function Routing() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Theme />} />
          <Route  path="/RedScare" element={<Hitler />} />
          <Route  path="/Crucible" element={<Connection />} />
          <Route  path="/AI" element={<Gatsby />} />
          <Route  path="/Visual" element={<Visual />} />
          <Route  path="/Synthesis" element={<Synthesis />} />
          <Route  path="/Chat" element={<Chat />} />
          <Route  path="/test" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
