import { useContext, useState, useEffect } from "react";
import { TeamContext } from "../../contexts/TeamContext";

const SearchCar = ({onSearch}) => {
    const {team} = useContext(TeamContext);
    const [search, setSearch] = useState("");
    const [filterCar, setFilterCar] = useState(team);

    const handleSearchInput = (e) => {
        setSearch(e.target.value);
    } 
    
    useEffect(()=> {
        const lowercaseSearch = search.toLowerCase();

        const filteredCars = team.filter((team) =>
            team.manufacturer.toLowerCase().includes(lowercaseSearch)
        );
        onSearch(filteredCars);
    }, [search, team, onSearch]);


    return (
        <section className="mb-3"> 
            <section>
                <h1>Search Cars</h1>
                <input type="text" placeholder="Enter car name" onChange={handleSearchInput} value={search}/>
            </section>
        </section>
    )
}

export default SearchCar;