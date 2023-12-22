import { useLocation } from "react-router-dom";
import { Routing } from "./routes/Routes";
import { Nav } from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import services from "./services/countries.services";
import { Footer } from "./components/Footer/Footer";
function App() {
  const { pathname } = useLocation();
  const [countries, setCountries] = useState([]);
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
      {pathname !== "/" && <Nav handleSearch={handleSearch} />}{" "}
      <Routing countries={countries} />
    </>
  );
}

export default App;
