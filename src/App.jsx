import "./App.css";
import "./theme.css";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState("Tah57");
  const [Age, setAge] = useState("28");
  const [Count, setCount] = useState(0);

  const [theme, settheme] = useState("");


  const change = () => {setAge("33 ");}

  return (
    <div className={`App ${theme}`}>

<button onClick={  () => {  settheme( theme =="" ? "Dark " :""   )  }  } style={{marginBottom:"46px",marginTop:"46px"}} >Toggle Theme</button>


<div onChange={  () => {  settheme( theme =="" ? "Dark " :""   )  }  }  style={{marginBottom:"46px"}} className="btn-container">
  <i className="fa fa-sun-o" aria-hidden="true" />
  <label className="switch btn-color-mode-switch">
    <input type="checkbox" name="color_mode" id="color_mode" defaultValue={1} />
    <label
      htmlFor="color_mode"
      data-on="Dark"
      data-off="Light"
      className="btn-color-mode-switch-inner"
    />
  </label>
  <i className="fa fa-moon-o" aria-hidden="true" />
</div>









<div>
      <button onClick={  () => {  settheme("Light ")  }  } style={{marginRight:"26px"}} >Light</button>
      <button onClick={  () => {  settheme("Dark ")  }     } style={{marginRight:"26px"}} >Dark</button>
      <button onClick={  () => {  settheme("Gery ")  }     } style={{marginRight:"26px"}} >Gery</button>
      <button onClick={  () => {  settheme("Pink ")  }     }>Pink</button>
</div>


    <h2 style={{marginTop:"66px"}} >My Name Is {person}</h2>
      <button onClick={  () => {  setPerson("ELRAYEK ")  }     }>Change Name</button>
      <br/><br/>
      <h2>My age Is {Age}</h2>
      <button onClick={ change   }>Change Name</button>
      <br/><br/>
    
      <button onClick={  () => {  setCount(Count+1);}    }>Count Is {Count}</button>
    </div>
  );
}

export default App;
