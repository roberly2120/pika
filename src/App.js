import HeatMap from './Components/HeatMap';
import Header from './Components/Header';
import Home from './Components/Home';
import Bio from './Components/Bio';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from './State';
import { Box, Image } from '@chakra-ui/react';

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
      {showGif &&
        <Box position="fixed" zIndex="9999" top="50%" left="0" w="200px" h="200px">
          <Image src="/OlliFig.gif" alt="OlliFig gif" />
        </Box> 
        }
    </div>
  );
}

export default App;
