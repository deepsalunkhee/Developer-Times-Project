import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Headline from './components/Headline';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Sports from './components/Sports';
import Tech from './components/Tech';
import Science from './components/Science';
import Health from './components/Health';
import Movies from './components/Movies';
import Engineering from './components/Engineering';

const App = () => {


  return (
    <>
    <Router>
      <div>
        <Routes>
          
          <Route exact path="/" element={<Headline/>}></Route>
          <Route exact path="/sport" element={<Sports/>}></Route>
          <Route exact path="/tech" element={<Tech/>}></Route>
          <Route exact path="/science" element={<Science/>}></Route>
          <Route exact path="/health" element={<Health/>}></Route>
          <Route exact path="/movies" element={<Movies/>}></Route>
          <Route exact path="/engineering" element={<Engineering/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
