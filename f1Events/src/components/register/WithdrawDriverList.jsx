import { useContext } from "react";
import WithdrawDriverItem from "./WithdrawDriverItem";
import { DriverContext } from "../../contexts/DriversContext";

const WithdrawDriverList = () => {
  
  const {driver, updateDriversList} = useContext(DriverContext)
    
  return (
    <div className='row g-3'>
      {driver?.map((drivers, i) => (
        <WithdrawDriverItem
            key={i}
            id={drivers.id}
            name={drivers.name}
            image={drivers.image}
        />
      ))}
    </div>
  );
};

export default WithdrawDriverList;
