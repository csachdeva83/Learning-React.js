import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Bingo from "./components/Bingo/Bingo";
import Join from "./components/Join/Join"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Join />} />
        <Route path="/Bingo" element={<Bingo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
