import { useState } from "react"; 

export default function Login({ onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  function logeq() {
    if (username === "admin" && password === "admin") {
      onLogin();
    }else{
      alert("Invalid username or password");
    }
  }
  return (
    <div className="login">
      <h2>Login</h2>

      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} onKeyDown={(e) => {
              if (e.key === "Enter") logeq();
            }}/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => {
              if (e.key === "Enter") logeq();
            }}/>

      <button onClick={logeq}>Login</button>
    </div>
  );
}


