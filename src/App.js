import React, {useEffect} from 'react';
import { Routes, Route} from "react-router-dom";

import {useDispatch} from 'react-redux';
import { fetchPizzas } from './redux/slices/pizzas';
import { fetchFilter } from "./redux/slices/filter";
import { fetchSort } from "./redux/slices/sort";

//hoc
import Main from "./container/Main";

import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Cart from "./components/Cart/Cart";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchPizzas());
      dispatch(fetchFilter());
      dispatch(fetchSort());
  }, []);

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
