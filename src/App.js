import { Route, Routes } from "react-router";
import Mockman from "mockman-js";

import "./App.css";
import { Landing } from "./pages/Landing";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart/Cart";
import { Wishlist } from "./pages/Wishlist/Wishlist";
import { ProdShowcase } from "./pages/ProdShowcase/ProdShowcase";
import { Login } from "./pages/Login/Login";
import { RequiresAuth } from "./components/RequiresAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/products/" element={<Products />} />
        <Route path="/products/:prodID" element={<ProdShowcase />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
