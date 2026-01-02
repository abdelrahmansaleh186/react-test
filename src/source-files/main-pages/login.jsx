import { useState } from "react";
import Swal from "sweetalert2";
import SEO from "../useable-componants/seo.jsx";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function logeq(e) {
    e.preventDefault(); // 🔥 STOP PAGE REFRESH

    if (
      (username === "admin" && password === "admin") ||
      (username !== "" && password === "user123")
    ) {
      Swal.fire({
        icon: "success",
        title: "Welcome!",
        confirmButtonText: "Continue",
      }).then(() => {
        onLogin(username);
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid username or password",
        confirmButtonText: "Try again",
        allowOutsideClick: false,
        borderRadius: "5rem",
        background: "#6cece671",
        color: "#a10000ff",
        backdrop: "rgba(0, 0, 0, 0.34)",
        width: "20rem",
        height: "20rem",
      });
    }
  }

  return (
    <>
      <SEO 
        description="Login to access the anime hub" 
        title="Anime Hub - Login"
      />
      <form onSubmit={logeq}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </>
  );
}
