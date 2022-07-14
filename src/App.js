import { Routes, Route} from "react-router-dom";

//hoc
import Main from "./container/Main";

import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import List from "./components/List/List";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={
              <Main>
                <Filter/>
                <List/>
              </Main>
        }/>
        <Route path="/cart" element={<div>Cart</div>}/>
      </Routes>

    </div>
  );
}

export default App;
