import React from 'react';
import { Routes, Route} from "react-router-dom";

//hoc
import Main from "./container/Main";

import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Routes>
          <Route path="/" element={
              <>
                <Filter/>
                <List/>
              </>
          }/>
          <Route path="/cart" element={
              <Cart/>
            }/>
        </Routes>
      </Main>
    </div>
  );
}

export default App;
