import React from "react";
import DateCounter from "../../components/counterComponents/DateCounter";
import PageNavPortfolio from "../../components/pageNavPortfolio/PageNavPortfolio";
import SocialMedia from "../../components/socialMediaComponent/SocialMedia";
import BackToTop from "../../components/homePageComponents/BackToTop";

function DateCounterPage() {
  return (
    <div>
      <PageNavPortfolio />
      <DateCounter />
      <SocialMedia />
      <BackToTop />
    </div>
  );
}

export default DateCounterPage;
