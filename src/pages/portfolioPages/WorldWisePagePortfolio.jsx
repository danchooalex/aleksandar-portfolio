import { CitiesProvider } from "../../contexts/CitiesContext";
import Homepage from "../worldWisePages/Homepage";

function WorldWisePagePortfolio() {
  return (
    <div>
      <CitiesProvider>
        <Homepage />
      </CitiesProvider>
    </div>
  );
}

export default WorldWisePagePortfolio;
