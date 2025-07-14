import Navbar from "./component/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Placeorder from "./pages/placeOrder/Placeorder";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/cart" element={Cart} />
        <Route path="/place_order" element={Placeorder} />
      </Routes>
    </div>
  );
};

export default App;
