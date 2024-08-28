import { useContext } from "react";
import RaceList from "../components/races/RaceList";
import RacesContext from "../contexts/RacesContext";

const RacePage = () => {
  const raceState = useContext(RacesContext);
  
  return (
    <section className="container mt-4 p-4 w-75">
      <h2>Race Results 🏆</h2>
      <RaceList  />
    </section>
  );
};

export default RacePage;