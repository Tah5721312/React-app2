import {useContext } from "react";
import ThemeContext from "./Context/Datacontext";
  
const Page2 = () => {
  const {name,theme} = useContext(ThemeContext);

  return (
    <div className={`App tah ${theme}`}>
      <h2>Page2</h2>
      <h2>Designed by {name}</h2>
    </div>
  );
}

export default Page2;
