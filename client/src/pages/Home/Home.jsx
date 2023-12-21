import { useEffect } from "react";
import styled from "./Home.module.css";
import services from "../../services/countries.services";
export const Home = () => {
  useEffect(() => {
    async function getAllCountries() {
      await services.getCountries();
    }
    getAllCountries();
  }, []);
  return <div>Home</div>;
};
