import React from "react";
import SocialMedia from "../../components/socialMediaComponent/SocialMedia";
import { CitiesProvider } from "../../contexts/CitiesContext";
import Homepage from "../worldWisePages/Homepage";

function WorldWisePagePortfolio() {
  return (
    <div>
      <Homepage />
      <SocialMedia />
    </div>
  );
}

export default WorldWisePagePortfolio;
