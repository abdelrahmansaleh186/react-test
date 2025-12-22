import "./App.css";
import { useState } from "react";
import Content from "./componantes/content.jsx";

function App() {
  const [count, SetCount] = useState(0);
  const c = count;
  function Add() {
    SetCount(count + 1);
    SetCount((c) => {
      return c + 1;
    });
  }

  return (
    <>
      <div>
        <Content />
      </div>
    </>
  );
}

export default App;
