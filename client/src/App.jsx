import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RestaurantsList from "../pages/RestaurantsList";
import OrderForm from '../pages/OrderForm';
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-900 text-white flex gap-4">
        <Link to="/">Restaurants</Link>
        <Link to="/order">Order</Link>
      </nav>
      <Routes>
        <Route path="/" element={<RestaurantsList />} />
        <Route path="/order" element={<OrderForm />} />
      </Routes>
    </Router>
  );
}

export default App;
