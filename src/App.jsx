import React from "react"
import Header from "./Components/Header/Header"
import Home from "./Containers/Home/Home"
import { characters } from "./_mock/apiMock";

function App() {
  return (
    <div className="App">
      <Header />
      <Home characterList={characters}/>
    </div>
  );
}

export default App;
