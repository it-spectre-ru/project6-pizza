import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Мексиканская" price={500} />
            <PizzaBlock title="Мексиканская2" price={1500} />
            <PizzaBlock title="Мексиканская3" price={2500} />
            <PizzaBlock title="Мексиканская4" price={3500} />
            <PizzaBlock title="Мексиканская5" price={4500} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
