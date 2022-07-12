//hoc
import Main from "./container/Main";

import Filter from "./components/Filter/Filter";
import Header from "./components/Header/Header";
import List from "./components/List/List";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main>
        <Filter/>
        <List/>
      </Main>
    </div>
  );
}

export default App;
