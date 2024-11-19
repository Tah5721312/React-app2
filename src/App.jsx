import "./App.css";
import "./theme.css";
import { useReducer } from "react";

const xxx = {name :"Tah57", age :28 ,startCount :0, theme:""};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };
      case "CHANGE_AGE":
        return { ...state, age: action.newAge};
        case "CHANGECOUNTER":
          return { ...state, startCount: action.newCount};
          case "CHANGE_LIGHT":
            return { ...state, theme: action.newTheme};
            case "CHANGE_DARK":
              return { ...state, theme: action.newTheme};
              case "CHANGE_GRAY":
                return { ...state, theme: action.newTheme};
                case "CHANGE_PINK":
                  return { ...state, theme: action.newTheme};
                  case "CHANGE_MOON":
                    return { ...state, theme: action.newTheme }; 
                     case "CHANGE_TOOGLE":
                    return { ...state, theme: action.newTheme };
        
    default:
      return state;
  }
};
{/* onClick={  () => {  settheme( theme =="" ? "Dark " :""   )  }  }  */}

function App() {
  
  const [allData, dispatch] = useReducer(reducer,xxx);

  return (
    <div className={`App ${allData.theme} `}>


<button onClick={  () => {     dispatch({ type: "CHANGE_TOOGLE", newTheme:allData.theme=="" ? "Dark " :"" });   }} style={{marginBottom:"46px",marginTop:"46px"}} >Toggle Theme</button>


<div onChange={  () => {     dispatch({ type: "CHANGE_MOON",  newTheme:allData.theme =="" ? "Dark " :""});   }}   style={{marginBottom:"46px"}} className="btn-container">
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
      <button onClick={  () => {     dispatch({ type: "CHANGE_LIGHT", newTheme: "LIGHT " });   }} style={{marginRight:"26px"}} >Light</button>
      <button onClick={  () => {     dispatch({ type: "CHANGE_DARK", newTheme: "Dark " });   }} style={{marginRight:"26px"}} >Dark</button>
      <button onClick={  () => {     dispatch({ type: "CHANGE_GRAY", newTheme: "Gery " });   }} style={{marginRight:"26px"}} >Gery</button>
      <button onClick={  () => {     dispatch({ type: "CHANGE_PINK", newTheme: "Pink " });   }} >Pink</button>
</div>


    <h2 style={{marginTop:"66px"}} >My Name Is{allData.name} </h2>
      <button onClick={  () => {     dispatch({ type: "CHANGE_NAME", newValue: "ELRAYEK " });   }} >Change Name</button>
      <br/><br/>
      <h2>My age Is {allData.age}</h2>
      <button onClick={  () => {     dispatch({ type: "CHANGE_AGE", newAge:33 });   }} >Change Name</button>
      <br/><br/>
    
      <button onClick={  () => {     dispatch({ type: "CHANGECOUNTER", newCount:allData.startCount+1 });   }} >Count Is {allData.startCount}</button>
    </div>
  );
}

export default App;
