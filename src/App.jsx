import { BrowserRouter, Route, Routes } from "react-router-dom";

import StarRatingPage from "./pages/portfolioPages/StarRatingPage";
import DateCounterPage from "./pages/portfolioPages/DateCounterPage";
import AtomicBlogPage from "./pages/portfolioPages/AtomicBlogPage";
import WorldWisePagePortfolio from "./pages/portfolioPages/WorldWisePagePortfolio";
import AppLayoutPortfolio from "./pages/portfolioPages/AppLayoutPortfolio";
import HomePagePortfolio from "./pages/portfolioPages/HomePagePortfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePagePortfolio />} />
        <Route path="rating" element={<StarRatingPage />} />
        <Route path="counter" element={<DateCounterPage />} />
        <Route path="atomic" element={<AtomicBlogPage />} />
        <Route path="world" element={<WorldWisePagePortfolio />} />
        <Route path="layout" element={<AppLayoutPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
