import { useContext, useState } from 'react';
import TeamItem from './TeamItem';
import { TeamContext } from '../../contexts/TeamContext';
import SearchCar from './SearchCar';

const TeamList = () => {

    const {team} = useContext(TeamContext);
    const [filterCar, setFilterCar] = useState([]);

    const handleSearch = (filterCar) => {
        setFilterCar(filterCar);
    }

    const getTeamsJSX = () => {
        const teamJSX= filterCar.map((team, i) => (
            <TeamItem 
                key={i}
                id={team.id}
                driver1={team.driver1}
                driver2={team.driver2}
                manufacturer={team.manufacturer}
                carImage={team.image}
            />
        ));
        return teamJSX;
    }

    return (
        <section className='m-4'>
            <SearchCar onSearch={handleSearch}/>
            <h3>Our teams</h3>
            <p>We currently have {filterCar.length} teams registered for the upcomming race!</p>
            <section className='row g-3'>
                {getTeamsJSX()}
            </section>
        </section>
    )
}
export default TeamList;