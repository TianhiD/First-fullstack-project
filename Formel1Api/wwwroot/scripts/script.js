// Js file for the index.html page

    /* 
    HTML elements
    */

    const showOutputSection = document.querySelector("#show-output-section");

    const getAllDriversBtn = document.querySelector("#get-all-drivers-btn");
    const getAllRacesBtn = document.querySelector("#get-all-races-btn")
    const getAllTeamsBtn = document.querySelector("#get-all-teams-btn")


    /* 
    HTTP functions
    */

    const getAllDrivers = async () => {
        
        try {
            const result = await axios.get("http://localhost:5210/api/drivers");
            showDrivers(result.data);
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }
      
    const getAllRaces = async () => {
        try {
            const result = await axios.get("http://localhost:5210/api/races");
            console.log(result.data);
            showRaces(result.data);
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    }

    const getAllTeams = async () => {
        try {
            const result = await axios.get("http://localhost:5210/api/teams");
            showTeams(result.data);
            console.log(result);
        }
        catch (err) {
            console.log(err);
        }
    }

    /* 
    functions display data
    */

    //Driver schema

    const showDrivers = (driverArray) => {
        driverArray.forEach(driver => {
            showDriver(driver);
        });
    }

    const showDriver = (driver) => {
        let htmlTxt = `
            <article>
                <h2>ID: ${driver.id}</h2>
                <h3>Name: ${driver.name}</h3>
                <p>Age: ${driver.age}</p>
                <p>Nationality: ${driver.nationality}</p>
                <img src="http://localhost:5210/images/drivers/${driver.image}" alt="driver image">
            </article>
            `;
            console.log(driver);
        showOutputSection.innerHTML += htmlTxt;
        
    }

    //Race schema

    const showRaces = (raceArray) => {
        raceArray.forEach(race => {
            showRace(race);
        });
    }

    const showRace = (race) => {
        let htmlTxt = `
            <article>
                <h2>ID: ${race.id}</h2>
                <h3>GrandPrix: ${race.grandPrix}</h3>
                <h4>WinnerName: ${race.winnerName}</h4>
                <p>WinnerTime: ${race.winnerTime}</p>
                <p>NumberOfLaps: ${race.numberOfLaps}</p>
            </article> 
                `;
            console.log(race);
            showOutputSection.innerHTML += htmlTxt;
    }

    //Team schema

    const showTeams = (teamArray) => {
        teamArray.forEach(team => {
            showTeam(team);
        });
    }

    const showTeam = (team) => {
        let htmlTxt = `
        <article>
            <h2>ID: ${team.id}</h2>
            <h3>Manufacturer: ${team.manufacturer}</h3>
            <p>Driver1: ${team.driver1}</p>
            <p>Driver2: ${team.driver2}</p>
            <img src="http://localhost:5210/images/cars/${team.carImage}" alt="team-car image">
        </article>
        `;
        console.log(team);
        showOutputSection.innerHTML += htmlTxt;
    }


    // empty output section

    const clearOutputSection = () => {
        showOutputSection.innerHTML = "";
    }

    /* 
    Event listeners
    */

    getAllDriversBtn.addEventListener("click", () => {
        console.log("clicked"); 
        clearOutputSection();
        getAllDrivers();
    });

    getAllRacesBtn.addEventListener("click", () => {
        console.log("clicked");
       clearOutputSection();
        getAllRaces();
    });

    getAllTeamsBtn.addEventListener("click", () => {
        console.log("clicked");
        clearOutputSection();
        getAllTeams();
    });

