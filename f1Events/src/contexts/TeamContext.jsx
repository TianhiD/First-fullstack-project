import {createContext, useState, useEffect} from 'react';
import F1TeamService from '../services/F1TeamService';

export const TeamContext = createContext(null);

export const TeamProvider = ({children}) => {

    const [team, setTeam] = useState([]);

    useEffect(()=>{
        getTeamFromService();
    }, []);

    const getTeamFromService = async () => {
        try {
            const teamFromService = await F1TeamService.getAll();
            setTeam(teamFromService);
        } catch(error) {
            if(404) {
                return {status: 404, message: "Resurs/url ikke funnet"}
            } else{
                return {status: 500, message: "Noe gikk galt"}
            }   
        }
    }


    const getById = async (id) => {
        try {
            const teamToUpdate = await F1TeamService.getById(id);
            if (teamToUpdate) {
                return {Status: 200, message: "Det gikk bra", teamToUpdate};
            } else {
                return {Status: 404, message: "Noe gikk galt med å hente team med ID ${id}"}
            }
            
        } catch(error) {
            return {status: 500, message: "Noe gikk galt"}
        }
    }

    const getByCar = async (manufacturer) => {
        try {
            const carManufacturer = await F1TeamService.getByCar(manufacturer);
            if (carManufacturer) {
                return { status: 200, message: 'Det gikk bra', carManufacturer};
            }
        } catch {
            return { status: 500, message: 'Noe gikk galt' };
        }
    }

    
    return (
        <TeamContext.Provider value={{team, getById, getByCar}}>
            {children}
        </TeamContext.Provider>
    )
}