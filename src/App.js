import './App.css';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/shared/layout.js';
import List from "./components/list/list.js";
import Details from './components/new/details.js';
import NotFound from './components/notFound.js';
import PopUp from './components/shared/popup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<List />} />
        <Route path='/list' element={<List />} >
          <Route path='/list/:id' element={
            <PopUp>
              <Details />
            </PopUp>} />
        </Route>
        <Route path='/new' element={<Details />} />
      </Route>
    <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
