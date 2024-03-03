import HeatMap from './Components/HeatMap';
import Header from './Components/Header';
import Home from './Components/Home';
import Bio from './Components/Bio';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/heatmap" element={<HeatMap />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </div>
  );
}

export default App;
