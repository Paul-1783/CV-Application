import { useState } from "react";
import "./App.css";

function App() {
  const [num, setnum] = useState(0);
  return (
    <>
      <div>{setnum(4)}</div>
      <h1></h1>
      <div className="card"></div>
    </>
  );
}

export default App;
