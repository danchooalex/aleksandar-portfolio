import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePagePortfolio from "./pages/portfolioPages/HomePagePortfolio";
import StarRatingPage from "./pages/portfolioPages/StarRatingPage";
import DateCounterPage from "./pages/portfolioPages/DateCounterPage";
import ReactQuizPage from "./pages/portfolioPages/ReactQuizPage";
import WorldWisePagePortfolio from "./pages/portfolioPages/WorldWisePagePortfolio";
import AppLayoutPortfolio from "./pages/portfolioPages/AppLayoutPortfolio";

import Homepage from "./pages/worldWisePages/Homepage";
import Pricing from "./pages/worldWisePages/Pricing";
import Product from "./pages/worldWisePages/Product";
import Login from "./pages/worldWisePages/Login";
import CityList from "./components/worldWiseComponents/CityList";
import City from "./components/worldWiseComponents/City";
import CountryList from "./components/worldWiseComponents/CountryList";
import Form from "./components/worldWiseComponents/Form";
import PageNotFound from "./pages/worldWisePages/PageNotFound";
import Map from "./components/worldWiseComponents/Map";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

const BASE_URL = "http://localhost:8000";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePagePortfolio />} />
            <Route path="rating" element={<StarRatingPage />} />
            <Route path="counter" element={<DateCounterPage />} />
            <Route path="react" element={<ReactQuizPage />} />
            <Route path="world" element={<WorldWisePagePortfolio />} />

            <Route path="home" element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />
            <Route path="map" element={<Map />} />
            <Route index element={<Navigate replace to="cities" />} />
            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities/:id" element={<City />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
            <Route path="form" element={<Form />} />
            <Route />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
