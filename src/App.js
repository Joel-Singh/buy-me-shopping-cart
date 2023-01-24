import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Store from "./components/Store"
import Header from "./components/Header.js"
import { useState } from "react";
import { getInitialCart } from "./utility/cartCreationFunctions";

function App() {
  const [ cart, setCart ] = useState(getInitialCart())
  return (
    <div className="app">
      <Routes>
        <Route path="*" element={<Header />} />
        <Route path="/" element={null} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store cart={cart} setCart={setCart}/>}/>
      </Routes>
    </div>
  );
};

export default App;
