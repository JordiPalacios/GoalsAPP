import './App.css';
import './index.css';
import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { Main } from './components/main.js';

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
