import {useContext, useState, useEffect} from 'react';
import { DriverContext } from '../../contexts/DriversContext';

const SearchDriver = ({onSearch}) => {

    const {driver} = useContext(DriverContext);
    const [search, setSearch] = useState("");
    const [filteredDrivers, setFilteredDrivers] = useState(driver)
    console.log('filteredDrivers', filteredDrivers)
    console.log('driver', driver)


    const handleSearchInput = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = async () => {
        
        const lowercaseSearch = search.toLowerCase();

        if(lowercaseSearch.trim() === ""){
            setFilteredDrivers(driver);
            onSearch(driver);
            return;
        }

        const encodedName = encodeURIComponent(search);
        const filteredDrivers = driver.filter((driver) =>
            driver.name.toLowerCase().includes(lowercaseSearch)
        );
        console.log('filtered', filteredDrivers)
        setFilteredDrivers(filteredDrivers);
        onSearch(filteredDrivers);
    };

    useEffect(()=> {
        handleSearch();
    }, [search, driver]);

    return (
        <div className="position-relative">
            <section className=" mt-5 position-absolute top-0 end-0">
                <h4>Search for Drivers</h4>
                <input placeholder="Enter driver name" onChange={handleSearchInput} value={search} type="text" className='rounded-start' />
                <button className='btn btn-fun-btn fw-bold' onClick={handleSearch}>Search</button>
            </section>
        </div>
    )
}
export default SearchDriver;