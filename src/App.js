import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Navigate from="/portfolio" to="/portfolio/home" />
          <Route path="/portfolio/home" element={<Home />}></Route>
          <Route path="/portfolio/about" element={<About />}></Route>
          <Route path="/portfolio/contact" element={<Contact />}></Route>
          <Route path="/portfolio/projects" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
