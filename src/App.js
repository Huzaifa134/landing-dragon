import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Order from "./Pages/order/Order";
import Dashboard from "./Pages/admin/dashboard/Dashboard";
import Cart from "./components/cart/Cart";
import MyState from "./context/data/MyState";
// import MyState from "./context/data/myState";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
