import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Routing } from "./routes/Routes";
import { Nav } from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import services from "./services/countries.services";
import cookies from "./utils/cookies";
function App() {
  const [countries, setCountries] = useState([]);
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = cookies.getCookie("x-token");

  useEffect(() => {
    if (!token && !pathname.includes("/validation")) {
      navigate("/");
      return;
    }
  }, []);

  useEffect(() => {
    async function getCountries() {
      const data = await services.getCountries();
      setCountries(data.countries);
    }
    getCountries();
  }, []);

  const handleSearch = async (e) => {
    const { value } = e.target;
    const data = await services.getByName(value);
    setCountries(data.countries);
  };

  return (
    <>
      {pathname !== "/" && pathname !== "/recovery" && (
        <Nav
          handleSearch={handleSearch}
          handleOpenMenu={setShowMenu}
          navFixed={pathname === "/activity" ? true : false}
        />
      )}{" "}
      <Routing countries={countries} showMenu={showMenu} />
    </>
  );
}

export default App;
