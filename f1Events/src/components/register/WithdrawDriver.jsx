import { useContext, useState } from 'react';
import F1DriverService from '../../services/F1DriverService';
import WithdrawDriverList from './WithdrawDriverList';
import { DriverContext } from '../../contexts/DriversContext';

const WithdrawDriver = () => {

    const [driverId, setDriverId] = useState('');
    const [drivers, setDrivers] = useState([]);
    const {updateDriversList, driver} = useContext(DriverContext);
    
    const updatedList = async () => {
        try {
            const response = await F1DriverService.getAll();
            console.log('updated drivers:', response);
            updateDriversList(response.data); 
        } catch (error) {
            console.error('Error fetching updated drivers:', error.message);
        }
    };


    const handleWithdraw = async () => {
        try {
            const result = await F1DriverService.deleteDriver(driverId);
            if (result.status === 204) {
                alert('Driver withdrawn successfully!');
                // Update the state first
                updateDriversList(driver.filter(d => d.id !== driverId));

                setDriverId('');
            } else {
                alert('Reload page to withdraw driver: ' + result.message);
            }
        } catch (error) {
            console.error('Error handling withdrawal:', error.message);
        }
    };

    

    return (
        <section className='container mt-4 p-4 w-100 vh-100'>
            <div>
               <h2>
                    Need some more practice? <br/>
                    Withdraw here!
                </h2> 
                <p className='fst-italic'>Please enter the ID of the driver you wish to withdraw:</p>
            </div>
            <div>
                <input name='driverId' type='text' placeholder='Enter ID' className=' bg-dark text-light m-3 rounded-pill' onChange={(e) => setDriverId(e.target.value)} />
                <input type='button' value='Withdraw' className='btn btn-fun-btn w-25 fw-bold m-3' onClick={handleWithdraw} />
            </div>
            <section style={{ maxHeight: '60vh', overflowY: 'auto'}}>            
                <WithdrawDriverList drivers={drivers} setDrivers={setDrivers}/>
            </section>
            
        </section>
        
      
    )
};

export default WithdrawDriver;