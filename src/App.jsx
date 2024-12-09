import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import "leaflet/dist/leaflet.css";

import HomePagePortfolio from "./pages/portfolioPages/HomePagePortfolio";
import StarRatingPage from "./pages/portfolioPages/StarRatingPage";
import DateCounterPage from "./pages/portfolioPages/DateCounterPage";
import ReactQuizPage from "./pages/portfolioPages/ReactQuizPage";
import WorldWisePagePortfolio from "./pages/portfolioPages/WorldWisePagePortfolio";

import Pricing from "./pages/worldWisePages/Pricing";
import Product from "./pages/worldWisePages/Product";
import Login from "./pages/worldWisePages/Login";
import CityList from "./components/worldWiseComponents/CityList";
import City from "./components/worldWiseComponents/City";
import CountryList from "./components/worldWiseComponents/CountryList";
import Form from "./components/worldWiseComponents/Form";
import AppLayout from "./pages/worldWisePages/AppLayout";
import PageNotFound from "./pages/worldWisePages/PageNotFound";

import { AuthProvider } from "./contexts/FakeAuthContext";
import { CitiesProvider } from "./contexts/CitiesContext";

const BASE_URL = "https://baa1fe3e-91be-4649-bf4c-12886898cfe3.mock.pstmn.io";

function App() {
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
            <Route path="pricing" element={<Pricing />} />
            <Route path="product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="map" element={<AppLayout />}>
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
            </Route>
            <Route />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
