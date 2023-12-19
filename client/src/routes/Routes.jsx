import { Routes, Route } from "react-router-dom";
import { Landing } from "../pages/Landing/Landing";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};
