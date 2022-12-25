import { BrowserRouter, Routes, Route } from "react-router-dom";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div> Homepage </ div>} />
        <Route path="/profile" element={<div> Profile </ div>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
