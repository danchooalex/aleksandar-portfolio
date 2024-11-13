import React from "react";
import PageNavPortfolio from "../../components/pageNavPortfolio/PageNavPortfolio";
import SocialMedia from "../../components/socialMediaComponent/SocialMedia";

import AppLayoutPortfolio from "./AppLayoutPortfolio";

function HomePagePortfolio() {
  return (
    <div>
      <PageNavPortfolio />
      <AppLayoutPortfolio />
      <SocialMedia />
    </div>
  );
}

export default HomePagePortfolio;
