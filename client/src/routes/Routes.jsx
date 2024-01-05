import { Routes, Route } from "react-router-dom";
import { Landing } from "../pages/Landing/Landing";
import { NotFound } from "../pages/NotFound/NotFound";
import { Home } from "../pages/Home/Home";
import { Validation } from "../pages/Validation/Validation";
import { Activity } from "../pages/Activity/Activity";
import { About } from "../pages/About/About";
import { Recovery } from "../pages/Recovery/Recovery";
export const Routing = ({ countries, showMenu }) => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/activity" element={<Activity showMenu={showMenu} />} />
      <Route path="/home" element={<Home countries={countries} />} />
      <Route path="/about" element={<About />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/validation/userActivation/:code" element={<Validation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
