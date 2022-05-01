import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import Fitness from './pages/Fitness';
import Celebrity from './pages/Celebrity';
import Food from './pages/Food';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Deals from './pages/Deals';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="fitness" element={<Fitness />} />
        <Route path="celebrity" element={<Celebrity />} />
        <Route path="food" element={<Food />} />
        <Route path="deals" element={<Deals />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="terms-condition" element={<Terms />} />
      </Routes>
    </>
  );
}

export default App;
