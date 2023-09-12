import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SubNav from './components/SubNav.js';
import GeneRal from './pages/GeneRal.js';
import BusiNess from './pages/BusiNess.js';
import SpoRts from './pages/SpoRts.js';
import TechNology from './pages/TechNology.js';
import EnterTainment from './pages/EnterTainment.js';
import Science from './pages/Science.js';
import Health from './pages/Health.js';

const App = () => {
  const apikey1 = "e40f7b32353f40adb48de56901846959"; 

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SubNav />
                <GeneRal apikey={apikey1}/>
              </>
            }
          />
          <Route
            path="/sports"
            element={
              <>
                <SubNav className='fixed'/>
                <SpoRts apikey={apikey1} />
              </>
            }
          />
          <Route
            path="/business"
            element={
              <>
                <SubNav className='fixed'/>
                <BusiNess apikey={apikey1} />
              </>
            }
          />
          <Route
            path="/technology"
            element={
              <>
                <SubNav />
                <TechNology apikey={apikey1} />
              </>
            }
          />
          <Route
            path="/entertainment"
            element={
              <>
                <SubNav />
                <EnterTainment apikey={apikey1} />
              </>
            }
          />
          <Route
            path="/health"
            element={
              <>
                <SubNav />
                <Health apikey={apikey1} />
              </>
            }
          />
          <Route
            path="/science"
            element={
              <>
                <SubNav />
                <Science apikey={apikey1} />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
