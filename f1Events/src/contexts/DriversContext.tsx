import { createContext, useState, useEffect, ReactNode } from 'react';
import F1DriverService from '../services/F1DriverService';
import IRegisterDriver from '../interfaces/IRegisterDriver';

export interface DriverContextProps {
  driver: IRegisterDriver[];
  updateDriversList: (addedDriver: IRegisterDriver) => void;
  getById: (id: number) => Promise<{ status: number; message: string; driverToUpdate?: IRegisterDriver }>;
  getByName: (name: string) => Promise<{ status: number; message: string; driverName?: IRegisterDriver }>;
  addDriver: (newDriver: IRegisterDriver, image: File) => void;
  editDriver: (driverToUpdate: IRegisterDriver) => Promise<{ status: number; message: string }>;
  deleteDriver: (id: number) => Promise<boolean | { status: number; message: string }>;
}

export const DriverContext = createContext<DriverContextProps | null>(null);

interface DriverProviderProps {
  children: ReactNode;
}

export const DriverProvider: React.FC<DriverProviderProps> = ({ children }) => {
  
  const [driver, setDriver] = useState<IRegisterDriver[]>([]);
console.log('DriverContext - driver:', driver);
  useEffect(() => {
    setTimeout(()=>{
      getDriverFromService();
    }, 1000);
  }, []);

  const getDriverFromService = async () => {
    try {
      const driverFromService = await F1DriverService.getAll();
      setDriver(driverFromService);
    } catch (error) {
      if (error) {
        throw new Error('Resurs/url ikke funnet');
      } else {
        throw new Error('Noe gikk galt');
      }
    }
  };

  const getById = async (id: number) => {
    try {
      const driverToUpdate = await F1DriverService.getById(id);
      if (driverToUpdate) {
        return { status: 200, message: 'Det gikk bra', driverToUpdate };
      } else {
        return { status: 404, message: `Noe gikk galt med å hente driver med ID ${id}` };
      }
    } catch (error) {
      return { status: 500, message: 'Noe gikk galt' };
    }
  };

  const getByName = async (name: string) => {
    try {
      const driverName = await F1DriverService.getByName(name);
      if (driverName) {
        return { status: 200, message: 'Det gikk bra', driverName};
      } else {
        return { status: 404, message: `Noe gikk galt med å hente driver med navn ${name}` };
      }
      
    }catch (error) {
      return { status: 500, message: 'Noe gikk galt' };
    }
  };

  const addDriver = async (newDriver: IRegisterDriver, image: File) => {
    console.log('Adding driver:', newDriver, image);
    try {
      const result = await F1DriverService.postDriver(newDriver, image);
      console.log("Response from addDriver:", result);
      await getDriverFromService();
      return result;
    } catch (error) {
      console.error("Error in addDriver:", error);
      return { status: 500, message: 'Noe gikk galt med registrering' };
    }
  };

  const updateDriversList = (addedDriver: IRegisterDriver) => {
    setDriver((_prevDrivers) => [addedDriver, ...driver]);
    console.log(driver);
    return true;
  };
   

  const editDriver = async (driverToUpdate: IRegisterDriver): Promise<{ status: number; message: string}> => {
    try {
      const result = await F1DriverService.putDriver(driverToUpdate);

      if(result.success){
        await getDriverFromService();
        return { status: 200, message: 'Driver updated successfully' };
      } else {
        return { status: 400, message: 'Gikk galt å oppdatere Driver' };
      }
    } catch (error) {
        console.error('Error editing driver:', error);
        return { status: 500, message: 'Noe gikk galt å endre Driver' };
    }
  };

  const deleteDriver = async (id: number) => {
    try {
      const deleteWentWell = await F1DriverService.deleteDriver(id);
      if (deleteWentWell) {
        return true;
      } else {
        return { status: 400, message: 'Det gikk ikke å slette' };
      }
    } catch (error) {
      return { status: 500, message: `Gikk galt å slette driver med ID ${id}` };
    }
  };

  return (
    <DriverContext.Provider value={{ driver, updateDriversList, getById, getByName, addDriver, editDriver, deleteDriver }}>
      {children}
    </DriverContext.Provider>
  );
};