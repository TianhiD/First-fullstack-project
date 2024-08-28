import F1DriverService from "../../services/F1DriverService";

const WithdrawDriverItem = ({id, name, image}) => {
    
    const imageUrl = F1DriverService.getDriverImageUrl();
    const driverImage = image ? `${imageUrl}/${image}` : '';

    return (
        <article className="col-sm-3 col-md-2 mt-5">
            <div>
                <h3>Driver: {id}</h3>
                <img src={driverImage} alt={name} className="mb-2 img-fluid rounded" />
                <div className="shadow p-3 mb-5 bg-body rounded">
                    <div className="about-section">
                        <p className="fs-6 fw-bold">
                            Id: {id} <br />
                            Name: {name}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default WithdrawDriverItem;