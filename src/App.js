import React from 'react';
import MediaQuery from 'react-responsive'
import './App.css';
import BottomBar from './components/bottomBar';
import GameIndex from './components/gameIndex.js';
import Home from './pages/Home';


function App() {
  return (
    <div className='root'>
      <MediaQuery minWidth={768}>
        <Home />
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <GameIndex />
        <GameIndex />
        <BottomBar />
      </MediaQuery>
    </div>
  );
}

export default App;
