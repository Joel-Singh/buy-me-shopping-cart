import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./Store"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
