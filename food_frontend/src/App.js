import React from 'react';
import Checkout from './components/common/checkout/checkout';
import HomePage from './pages/home';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<HomePage />} />

      </Routes>
    </Router>
  );
}
export default App;
