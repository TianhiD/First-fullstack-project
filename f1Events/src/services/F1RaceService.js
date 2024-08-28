import axios from "axios";

const F1RaceService = (() => {

    const racesController = "http://localhost:5146/api/races";

    const getAll = async () => { 
        try {
            const result = await axios.get(racesController);
            return result.data;
        } catch (error) {
            console.log("Ikke kontakt med RacesController")
            throw error;
        }
    }
    
    return {
        getAll, 
    };


})();

export default F1RaceService;