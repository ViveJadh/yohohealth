import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import Fitness from './pages/Fitness';
import Covid from './pages/Covid';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="fitness" element={<Fitness />} />
        <Route path="covid-19" element={<Covid />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="terms-condition" element={<Terms />} />
      </Routes>
    </>
  );
}

export default App;
