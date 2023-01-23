import React from 'react';
import MediaQuery from 'react-responsive'
import './App.css';
import Home from './pages/Home';
import OnBoard from './pages/OnBoard';
import BottomBar from './components/bottomBar';
import GameIndex from './components/gameIndex.js';


function App() {
  return (
    <div className='root'>
      <MediaQuery minWidth={768}>
        <Home />
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <OnBoard />
        <GameIndex />
        <GameIndex />
        <BottomBar /> 
      </MediaQuery>
    </div>
  );
}

export default App;
