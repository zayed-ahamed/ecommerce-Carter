import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>

      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/login">Login</Link>{" "}
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cart" element={<Cart />} />

      </Routes>

    </div>
  );
}

export default App;