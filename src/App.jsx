import ProductsList from "./components/ProductsList/ProductsList";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import ProductCategorie from "./components/ProductCategorie/ProductCategorie";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route
          path="/category/:productCategory"
          element={<ProductCategorie />}
        />
      </Routes>
    </div>
  );
}

export default App;
