import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import Fitness from './pages/Fitness';
import Food from './pages/Food';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="fitness" element={<Fitness />} />
        <Route path="food" element={<Food />} />
      </Routes>
    </>
  );
}

export default App;
