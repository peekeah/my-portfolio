import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import { ContactMe } from "./components/ContactMe";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { Resume } from "./components/Resume";
import Skills from "./components/Skills";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
