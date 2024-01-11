import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Teams from './components/Teams';
import Search from './components/Search';
import Data from './components/Data';
import Positions from './components/Positions';

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/teams' element={<Teams />}/>
          <Route path='/positions' element={<Positions />}/>
          <Route path='/search' element={<Search />}/>
          <Route path='/data' element={<Data />}/>
        </Route>
      </Routes>
    </>
  )
};

export default App;
