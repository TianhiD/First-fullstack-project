import {useContext, useState, useEffect} from 'react';
import DriverItem from './DriverItem';
import { DriverContext } from '../../contexts/DriversContext';
import SearchDriver from './SearchDriver';

const DriverList = () => {

    const {driver} = useContext(DriverContext)
    
    useEffect(()=> {
        setFilteredDrivers(driver);
    }, [driver]);

    const [filteredDrivers, setFilteredDrivers] = useState([]);

    const onSearch = (filteredDrivers) => {
        console.log('Search results:', filteredDrivers);
        setFilteredDrivers(filteredDrivers);
    };

    const getDriversJSX = () => {
        const driverJSX = filteredDrivers.map((driver, i) => (
            <DriverItem
                key={i}
                id={driver.id}
                name={driver.name}
                age={driver.age}
                nationality={driver.nationality}
                image={driver.image}
            />
        ))
        return driverJSX;
    }

    return (
        <section className='mb-4'>
            <SearchDriver onSearch={onSearch}/>
            <section className='row g-3'>
                <div className='mt-5'>
                    <h3>Our drivers</h3>
                    <p>Number of drivers: {filteredDrivers.length}</p>
                    <section className='row g-3 mt-5'>
                        {getDriversJSX()}
                    </section>
                </div>
            </section>
        </section>
    )
}
export default DriverList;
