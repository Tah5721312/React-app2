import "./App.css";
import "./theme.css";
import { Link } from "react-router-dom";
import {useContext } from "react";
import ThemeContext from "./Context/Datacontext";
 



function App() {
  
  const {name,changeName,changeAge,changeCounter,changeTheme,age,startCount,theme} = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === 'Light' ? 'Dark' : 'Light';
    changeTheme(newTheme);
  };
  return (
    <div className={`App ${theme}`}>

<Link to="/Page2">Go to Page2</Link>

<button onClick={toggleTheme} style={{marginBottom:"46px",marginTop:"46px"}} >Toggle Theme</button>

<div    onChange={toggleTheme}  style={{marginBottom:"46px"}} className="btn-container">
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

      <button onClick={() => changeTheme('Light')}  style={{marginRight:"26px"}} >Light</button>
      <button onClick={() => changeTheme('Dark')} style={{marginRight:"26px"}} >Dark</button>
      <button onClick={() => changeTheme('Gery')} style={{marginRight:"26px"}} >Gery</button>
      <button onClick={() => changeTheme('Pink')} >Pink</button>
</div>


    <h2 style={{marginTop:"66px"}} >My Name Is {name} </h2>
      <button  onClick={() => changeName()} >Change Name</button>
      <br/><br/>
      <h2>My age Is {age}</h2>
      <button onClick={() => changeAge()}  >Change Age</button>
      <br/><br/>
      <button onClick={() => changeCounter()}  >Count Is {startCount}</button>
    </div>
  );
}

export default App;
