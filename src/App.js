import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/products' element= {<Products />}>
          <Route path='beers' element={ <Beers />} />
          <Route path='random-beer' element={ <RandomBeer />} />
          <Route path='new-beer' element={ <NewBeer />}  />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
