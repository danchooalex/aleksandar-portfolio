import { useCities } from "../../contexts/CitiesContext";

import CityItem from "../worldWiseComponents/CityItem";
import Message from "../worldWiseComponents/Message";
import Spinner from "../worldWiseComponents/Spinner";

import styles from "../worldWiseComponents/CityList.module.css";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.citList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
