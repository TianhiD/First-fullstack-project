import { ChangeEvent, useState, useContext } from "react";
import { DriverContext, DriverContextProps } from "../../contexts/DriversContext";
import IRegisterDriver from "../../interfaces/IRegisterDriver";


const AddNewDriver = () => {

    const [image, setImage] = useState<File | null>(null);

    const {addDriver} = useContext(DriverContext) as DriverContextProps;
    
    const [newDriver, setNewDriver] = useState<IRegisterDriver>({
        name: "",  
        age: 0, 
        nationality: "", 
        image: "",
        car: "",
    });

    const sendRegisterDriverToContext = () => {
        console.log('senRegisterDriver', newDriver)
        addDriver(newDriver, image as File);
        alert('Driver added succefully, find yourself amongst the drivers Hint: Everybody starts at the bottom');
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.currentTarget;
    
        setNewDriver((prevDriver) => ({ ...prevDriver, [name]: value }));
    };
    

    console.log('SETIMAGE',image)

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const imageFile = e.currentTarget.files?.[0] ?? null;
        setImage(imageFile);
    
        setNewDriver((prevDriver) => ({ ...prevDriver, image: imageFile ? imageFile.name : "" }));
    };
    


    return (
        <section className="container mt-4 p-4 w-50">
            <div className="mb-4">
                <h1>Want to join the next rase?</h1>
                <p className="fst-italic">Register for a race here!</p>
            </div>
            <div className="shadow p-3 bg-body rounded m-3">
                <p className="fs-6">Please fill out the drivers info:</p>
                <label className="form-label fs-7">Name:</label>
                <input className="form-control bg-dark text-light" type="text" name='name'  onChange={handleChange}/>
            
                <label className="form-label fs-7">Age:</label>
                <input className="form-control bg-dark text-light" type="text" name='age'  onChange={handleChange}/>
            
                <label className="form-label fs-7">Nationality:</label>
                <input className="form-control bg-dark text-light" type="text" name='nationality'  onChange={handleChange}/>
            
                <label className="form-label fs-7">Car:</label>
                <select name="car" onChange={handleChange} className="m-3">
                    <option value="RedBullRacing">Red Bull Racing</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="Ferrari">Ferrari</option>
                    <option value="McLaren">McLaren</option>
                    <option value="AstonMartin">Aston Martin</option>
                    <option value="Alpine">Alpine</option>
                    <option value="Williams">Williams</option>
                    <option value="AlphaTauri">AlphaTauri</option>
                    <option value="AlfaRomeo">Alfa Romeo</option>
                    <option value="HaasF1Team">Haas F1 Team</option>
                </select>
                <label className="form-label fs-7">Upload Image:</label>
                <input className="form-control bg-dark text-light mb-3" type="file" accept="image/*"  onChange={handleImageChange} />
                
                <button className="btn btn-fun-btn w-50 fw-bold" onClick={sendRegisterDriverToContext}>Register</button>
            </div>

            <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-fun-btn">
                    <a href="/withdraw" className="text-light fw-bold">Withdraw driver</a>
                </button>
            </div>
        </section>
    )
};

export default AddNewDriver;