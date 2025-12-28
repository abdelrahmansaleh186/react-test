import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
     
      <header>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <h1>Welcome to our website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, quo.
        </p>
      </header>
    </>
  );
}
