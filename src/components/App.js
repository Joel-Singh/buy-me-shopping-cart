import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./Store"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />}/>
    </Routes>
  );
};

export default App;
