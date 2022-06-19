//hoc
import Main from "./container/Main";

import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Filter/>
      </Main>
    </div>
  );
}

export default App;
