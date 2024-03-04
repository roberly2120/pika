import HeatMap from './Components/HeatMap';
import Header from './Components/Header';
import Home from './Components/Home';
import Bio from './Components/Bio';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from './State';

function App() {
  const [showGif, setShowGif] = useState(false);
  const { state, setState } = useContext(AppContext);
  const { isDarkMode } = state;
  useEffect(() => {
    if (isDarkMode) {
      setShowGif(true);
      setTimeout(() => {
        setShowGif(false);
      }, 2300);
    }
  }, [isDarkMode])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heatmap" element={<HeatMap />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
      {showGif && <img src="../OlliFig.gif" alt="Olinguito" className="gif" />}
    </div>
  );
}

export default App;
