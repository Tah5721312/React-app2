import "./App.css";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState("Tah57");
  const [Age, setAge] = useState("28");
  const [Count, setCount] = useState(0);


  const change = () => {
  setAge("33 ");
}

  return (
    <>
    <h2>My Name Is {person}</h2>
      <button onClick={  () => {  setPerson("ELRAYEK ")  }     }>Change Name</button>
      <br/><br/>
      <h2>My age Is {Age}</h2>
      <button onClick={ change   }>Change Name</button>
      <br/><br/>
      <h2>Count Is {Count}</h2>
      <button onClick={  () => {  setCount(Count+1);}   }>Counter</button>
    </>
  );
}

export default App;
