import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();


const initialData = {name :"Tah57", age :28 ,startCount :0, theme:""};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };
      case "CHANGE_AGE":
        return { ...state, age: action.newAge};
        case "CHANGECOUNTER":
          return { ...state, startCount: state.startCount + 1 };
          case "CHANGE_THEME":
            return { ...state, theme: action.newTheme};
        
    default:
      return state;
  }
};

// eslint-disable-next-line react/prop-types
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialData);

  const changeName = () => {  dispatch({ type: "CHANGE_NAME", newValue:"ELRAYEK" }); };
  const changeAge = () => {  dispatch({ type: "CHANGE_AGE", newAge:33 }); };
  const changeCounter = () => {  dispatch({ type: "CHANGECOUNTER"}); };
  const changeTheme = (newTheme) => {dispatch({ type: "CHANGE_THEME",newTheme  });};

  return (
     <ThemeContexttt.Provider value={{ ...state,changeName,changeAge,changeCounter,changeTheme}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;