import './App.css';
import './index.css';
import { Footer } from './components/shared/footer.js';
import { Header } from './components/shared/header.js';
import { Main } from './components/shared/main.js';
import Goal from "./components/list/goal.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main>
        <Goal />
      </Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
