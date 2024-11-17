import "./App.css";

function App() {
  let person ="Tah57"
const changename = () => {
  console.log("Hiiiiiiii");
  person ="ELRAYEK ";
}


  return (
    <>
    <h2>My Name Is {person}</h2>
      <button onClick={changename}>Change Name</button>
    </>
  );
}

export default App;
