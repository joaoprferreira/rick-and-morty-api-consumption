import React from "react"
import Header from "./Components/Header/Header"
import {Pagination} from "./Components/Pagination/Pagination"
import Home from "./Containers/Home/Home"
import { AppContextProvider } from "./Contexts/AppContext";


function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Header />
        <Home />
        <Pagination />
      </div>
    </AppContextProvider>
  );
}

export default App;
