import { Routes, Route } from "react-router-dom";
import { Landing } from "../pages/Landing/Landing";
import { NotFound } from "../pages/NotFound/NotFound";
import { Home } from "../pages/Home/Home";
import { Validation } from "../pages/Validation/Validation";
import { Activity } from "../pages/Activity/Activity";
export const Routing = ({ countries }) => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/home" element={<Home countries={countries} />} />
      <Route path="/validation/userActivation/:code" element={<Validation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
