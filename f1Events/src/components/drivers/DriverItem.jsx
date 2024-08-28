import F1DriverService from "../../services/F1DriverService";

const DriverItem = ({id, name, age, nationality, image}) => {

    const imageUrl = F1DriverService.getDriverImageUrl();
    const driverImage = image ? `${imageUrl}/${image}` : '';

    return (
        <article className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="about-section">
                <h3 className="fw-light fst-italic fs-6">Driver info</h3>
                <img src={driverImage} alt={name} className="mb-2 img-fluid rounded mx-auto d-block" />
            </div>
            <div className="shadow p-3 mb-5 bg-body rounded">
                <div className="about-section">
                    <p className="fs-6 fw-bold">
                        Name: {name} <br />
                        Age: {age} <br />
                        Nationality: {nationality} <br />
                    </p>
                </div>
            </div>
            
        </article>
    );
};

export default DriverItem;