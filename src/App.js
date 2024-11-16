import React from 'react';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Cart from './components/Cart';
import Quote from './components/Quote';
import CheckoutPage from './pages/CheckoutPage';
import OrdersPage from './pages/OrdersPage';
import { OrderProvider } from './context/OrderContext'; 

function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/order" element={<OrdersPage />} /> {/* No need to pass orders as a prop */}
          </Routes>
        </Router>
      </OrderProvider>
    </CartProvider>
  );
}

export default App;
