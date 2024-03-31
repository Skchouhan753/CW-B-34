
import { Route, Routes } from "react-router-dom";
import Food from "../pages/Food/Food";
import Home from "../pages/Home/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/diary" element={<Food />} />
    </Routes>
  );
};

export default MainRoutes;
