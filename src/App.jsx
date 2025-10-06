import { Route, Routes } from "react-router";

// COMPONENTS
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error404 from "./overlays/Error404";
import Cart from "./overlays/Cart";
import Login from "./auth/Login";
import Register from "./auth/Register";

// CTA
import Approved from "./overlays/Approved";
import Declined from "./overlays/Declined";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order/approved" element={<Approved />} />
      <Route path="/order/declined" element={<Declined />} />
      <Route path="/users/login" element={<Login />} />
      <Route path="/users/register" element={<Register />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
