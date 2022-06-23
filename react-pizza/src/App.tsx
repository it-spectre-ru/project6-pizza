import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
// import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';
import NotFound from './pages/NotFound';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';

const Cart = React.lazy(() => import('./pages/Cart'));
// const FullPizza = React.lazy(() => import('./pages/FullPizza'));
// const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <React.Suspense fallback={<div>Load.....</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
