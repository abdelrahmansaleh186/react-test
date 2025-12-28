import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./componantes/Home.jsx";
import About from "./componantes/content2.jsx";
import Content from "./componantes/content.jsx";
import Contact from "./componantes/content3.jsx";
import Login from "./componantes/login.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // if NOT logged in → show login only
  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  // if logged in → show site
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
