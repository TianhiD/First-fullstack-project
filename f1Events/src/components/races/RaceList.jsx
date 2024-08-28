import { useState, useEffect } from 'react';
import RaceItem from './RaceItem';
import RacesContext from '../../contexts/RacesContext';
import F1RaceService from '../../services/F1RaceService';

const RaceList = ({ races }) => {
  const [raceState, setRaceState] = useState([]); 

  useEffect(() => {
    F1RaceService.getAll()
      .then(data => setRaceState(data))
      .catch(error => console.log(error.message));
  }, []);

  const [sortOrderOfLaps, setSortOrderOfLaps] = useState("highToLow"); 
  // sorting the number of laps in the db from high to low
  const sortRaces = [...raceState].sort((high, low) => {
    if (sortOrderOfLaps === "highToLow") {
      return low.numberOfLaps - high.numberOfLaps;
    }else {
      return high.numberOfLaps - low.numberOfLaps;
    }
  });

  const handleSort = () => {
    setSortOrderOfLaps(sortOrderState => 
      sortOrderState === "highToLow" ? "lowToHigh" : "highToLow"
    );
  };

  return (
    <RacesContext.Provider value={raceState}>
      <section>
        <button className='d-flex btn btn-fun-btn fw-bold mb-4' onClick={handleSort}>
          Sort based on laps
        </button>
        <div className='row'>
          {sortRaces.map((race, index) => (
            <div className='col-md-12 col-lg-6' key={index} >
              <RaceItem race={race} />
            </div>
          ))}
        </div>
      </section>
    </RacesContext.Provider>
    
    );
};

export default RaceList;