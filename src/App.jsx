// router
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";


// main components
import Login from "./source-files/main-pages/login.jsx";
import Home from "./source-files/main-pages/home.jsx";
import Products from "./source-files/main-pages/products.jsx";
import About from "./source-files/main-pages/about.jsx";
// usable components
import Nav from "./source-files/useable-componants/nav.jsx";
import Content from "./source-files/useable-componants/content.jsx";
import Footer from "./source-files/useable-componants/footer.jsx";

// styles
import "./source-files/styles/body.css";
import "./source-files/styles/animations.css";
import "./source-files/styles/content.css";
import "./source-files/styles/header.css";
import "./source-files/styles/loginform.css";
import "./source-files/styles/bg-s/nav.css";
import "./source-files/styles/footer.css";


function App() {
  //  login code
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  //  if NOT logged in → show login only
  if (!isLoggedIn) {
    return (
      <Login
        onLogin={(username) => {
          setUsername(username);

          setIsLoggedIn(true);
        }}
      />
    );
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
