import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import StarRatingPage from "./pages/StarRatingPage";
import DateCounterPage from "./pages/DateCounterPage";
import AtomicBlogPage from "./pages/AtomicBlogPage";
import WorldWisePage from "./pages/WorldWisePage";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="rating" element={<StarRatingPage />} />
        <Route path="counter" element={<DateCounterPage />} />
        <Route path="atomic" element={<AtomicBlogPage />} />
        <Route path="world" element={<WorldWisePage />} />
        <Route path="layout" element={<AppLayout />} />
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
