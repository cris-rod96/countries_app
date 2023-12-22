import { Routes, Route } from "react-router-dom";
import { Landing } from "../pages/Landing/Landing";
import { NotFound } from "../pages/NotFound/NotFound";
import { Home } from "../pages/Home/Home";
import { Footer } from "../components/Footer/Footer";

export const Routing = ({ countries }) => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home countries={countries} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
