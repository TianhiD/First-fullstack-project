import axios from "axios";

const F1DriverService = (()=>{

    const driverController = "http://localhost:5146/api/drivers";
    const imageUploadController = "http://localhost:5146/api/imageupload";
    const driverImageUrl = "http://localhost:5146";

    const getAll = async () => {
        try
        {
            const result = await axios.get(driverController);
            return result.data;
        }
        catch(error)
        {
            console.log("Ikke kontakt med DriverController")
            return false;
        }
    }
    
    

    const getById = async (id) => {
        try
        {
            const result = await axios.get(`${driverController}/${id}`);
            return result.data;

        }
        catch(error)
        {
            console.log(`Error fetching driver with ID ${id}:`, error);
            return [];
        }
        
    }

    const getByName = async (name) => {
        try{
            const encodedName = encodeURIComponent(name);
            const action = "GetName"

            console.log("Request Configuration:", { name });
            const result = await axios.get(`${driverController}/${action}/${encodedName}`);

            return result.data;
        } catch (error) {
            console.error(`Error fetching driver by name ${name}:`, error);
            throw error;
        }
    }

    const putDriver = async (driverToUpdate) => {
        try
        {
            const result = await axios.put(driverController, driverToUpdate);
            console.log(result);
            return {success: true, data: result.data, message: "Det gikk bra"};

        }
        catch(error)
        {
            console.error("Error updating driver:", error);
            return { success: false, message: "Failed to update driver" };
        }
        
    }

    const postDriver = async (newDriver, image) => {
        
        try {
            const formData = new FormData();
            formData.append("file", image);

            const response = await axios.post(driverController, newDriver);
            
            const resultImageUpload = await axios({
                url: imageUploadController,
                method: "POST",
                data: formData,
                headers: {"Content-Type": "multipart/form-data"}
            });

            formData.delete("image");

            return response.data;

        } catch (error) {
            if (response.status === 400 && response.data && response.data.errors) {
                console.error("Validation errors:", response.data.errors);
            
                return { success: false, data: null, message: "Validation errors occurred" };
            }
            console.error("Error in postDriver", error.response?.data);
            throw error;
        }
    };

    const getDriverImage = async (image) => {
        try {
            const imageName = `${image}.jpg`;

            const result = await axios.get(`${driverImageUrl}/${imageName}`);
            console.log(result.data);
            return result.data;
        } catch (error) {
            if(error.response?.status === 404) {
                return console.log({success: false, message: "Resurs/url ikke funnet"});
            } else {
                console.error("Error fetching driver image:", error);
                console.log({ success: false, status: 500, message: "An error occurred" });
            }
        }
    }


    
    const getDriverImageUrl =  () => {
        return driverImageUrl;
    }

    

    const deleteDriver = async (id) => {
        try {
            const result = await axios.delete(`${driverController}/${id}`);
            console.log(result);
            return { success: true, message: "Driver deleted successfully" };

        }catch(error){
            console.error("Error deleting driver:", error);
            return { success: false, message: "Failed to delete driver" };
        }
    }

    return {
        getAll,
        getById,
        getByName,
        putDriver,
        postDriver,
        deleteDriver,
        getDriverImage,
        getDriverImageUrl
    }

})();

export default F1DriverService;