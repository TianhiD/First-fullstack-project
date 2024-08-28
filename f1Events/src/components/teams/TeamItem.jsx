import F1TeamService from "../../services/F1TeamService";

const TeamItem = ({id, manufacturer, driver1, driver2}) => {

    const teamImageUrl = F1TeamService.getTeamImageUrl();
    const teamImage = id ? `${teamImageUrl}${id}.jpg` : '';
    console.log('Team ID:', id);
    console.log('Team Image URL:', teamImage);

    return (
        <article className="col-md-4 col-sm-6 mb-4">

            <div className="about-section">
                <h3 className="fw-light fst-italic fs-6">Team {id}</h3>
                <img src={teamImage} alt={`Image of car`} className="mb-2 img-fluid rounded mx-auto d-block"/>
            </div>
            <div className="shadow p-3 mb-5 bg-body rounded">
                <div className="about-section">
                    <h3 className="fw-light fst-italic fs-6">Team info:</h3>
                    <p className="fs-6 fw-bold">
                        Manufacturer: {manufacturer} <br />
                        Driver 1: {driver1} <br />
                        Driver 2: {driver2} <br />
                    </p>
                </div>
            </div>
            
        </article>
    );
};

export default TeamItem;