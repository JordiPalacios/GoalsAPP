import './App.css';
import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { Main } from './components/main.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
