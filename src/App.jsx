import { Route, Routes } from "react-router";

//COMPONENTS
import Home from "./pages/Home";
import Products from "./pages/Products";
import Error404 from "./comps/Error404";
import Cart from "./comps/cart";
import Login from "./auth/Login";
import Register from "./auth/Register";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
