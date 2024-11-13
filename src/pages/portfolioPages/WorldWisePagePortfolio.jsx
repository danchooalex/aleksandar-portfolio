import React from "react";
import SocialMedia from "../../components/socialMediaComponent/SocialMedia";
import { CitiesProvider } from "../../contexts/CitiesContext";
import Homepage from "../worldWisePages/Homepage";
import Sidebar from "../../components/worldWiseComponents/Sidebar";
import Map from "../../components/worldWiseComponents/Map";

function WorldWisePagePortfolio() {
  return (
    <div>
      <Homepage />
      <SocialMedia />
    </div>
  );
}

export default WorldWisePagePortfolio;
