// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects.jsx";
import Honors from './pages/Honors.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/honors" element={<Honors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;