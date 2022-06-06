import React from 'react';
import { Routes, Route } from 'react-router-dom';

// импортирую два хука useSelector - отвечает за вытаскивание данных,
// useDispatch - хук говорит сделай что-то, потому что нельзя просто вызвать increment() --> нужно dispatch(increment())
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, test } from './redux/slices/filterSlice';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import './scss/app.scss';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch(); // возвращает функцию, которая ждет объект

  return (
    <div className="wrapper">
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(test())}>
        Decrement
      </button>
      <span>{count}</span>

      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
