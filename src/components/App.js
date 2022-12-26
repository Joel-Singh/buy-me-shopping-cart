import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Store from "./Store"
import Header from "./Header.js"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={null} />
        <Route path="*" element={<Header />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />}/>
      </Routes>
    </div>
  );
};

export default App;
