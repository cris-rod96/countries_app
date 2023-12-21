import { Routes, Route } from "react-router-dom";
import { Landing } from "../pages/Landing/Landing";
import { NotFound } from "../pages/NotFound/NotFound";
import { Home } from "../pages/Home/Home";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
