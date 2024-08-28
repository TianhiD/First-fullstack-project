import axios from "axios";

const F1TeamService = (()=>{

    const teamController = "http://localhost:5146/api/teams";
    const imageUploadController = "http://localhost:5146/api/imageupload";
    const teamImageUrl = "http://localhost:5146/images/cars/";

    const getAll = async () => {
        try
        {
            const result = await axios.get(teamController);
            return result.data;
        }
        catch(error)
        {
            console.log("Ikke kontakt med teamController")
            return false;
        }
    }
    

    const getById = async (id) => {
        try
        {
            const result = await axios.get(`${teamController}/${id}`);
            return result.data;

        }
        catch(error)
        {
            console.log("Ikke kontakt med teamController")
            return [];
        }
        
    }

    const getByCar = async (manufacturer) => {
        try {
            const action = "GetCar"

            const result = await axios.get(`${teamController}/${action}/${manufacturer}`);

            return result.data;
        } catch {
            console.error(`Error fetching manufacturer by brand ${manufacturer}:`, error);
            return false;
        }
    }
    
    const getTeamImage = async (id) => {
        try {
            const result = await axios.get(`${teamImageUrl}/${id}`);
            console.log(result.data);
            return result.data;
        } catch (error) {
            if(404) {
                return console.log({status: 404, message: "Resurs/url ikke funnet"});
            } else {
                return console.log({status: 500, message: "Noe gikk galt"});
            }
        }
    }

    const getTeamImageUrl =  () => {
        return teamImageUrl;
    }

    return {
        getAll,
        getById,
        getByCar,
        getTeamImage,
        getTeamImageUrl
    }

})();

export default F1TeamService;