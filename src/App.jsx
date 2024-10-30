import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import StarRatingPage from "./pages/portfolioPages/StarRatingPage";
import DateCounterPage from "./pages/portfolioPages/DateCounterPage";
import AtomicBlogPage from "./pages/portfolioPages/AtomicBlogPage";
import WorldWisePagePortfolio from "./pages/portfolioPages/WorldWisePagePortfolio";
import AppLayoutPortfolio from "./pages/portfolioPages/AppLayoutPortfolio";
import HomePagePortfolio from "./pages/portfolioPages/HomePagePortfolio";

import ProtectedRoute from "./pages/worldWisePages/ProtectedRoute";
import Homepage from "./pages/worldWisePages/Homepage";
import Pricing from "./pages/worldWisePages/Pricing";
import Product from "./pages/worldWisePages/Product";
import Login from "./pages/worldWisePages/Login";
import AppLayout from "./pages/worldWisePages/AppLayout";
import CityList from "./components/worldWiseComponents/CityList";
import City from "./components/worldWiseComponents/City";
import CountryList from "./components/worldWiseComponents/CountryList";
import Form from "./components/worldWiseComponents/Form";
import PageNotFound from "./pages/worldWisePages/PageNotFound";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePagePortfolio />} />
            <Route path="rating" element={<StarRatingPage />} />
            <Route path="counter" element={<DateCounterPage />} />
            <Route path="atomic" element={<AtomicBlogPage />} />
            <Route path="world" element={<WorldWisePagePortfolio />} />
            <Route path="layout" element={<AppLayoutPortfolio />} />
            <Route path="home" element={<Homepage />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="product" element={<Product />} />
            <Route path="login" element={<Login />} />
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
