import { Link } from "react-router-dom";

const HomePageItem = ({ title, italicText, boldText, linkToPage, button }) => {
    return (
        <article className="mb-3 shadow p-3 mb-5 bg-body rounded">
            <h4 className="fs-4">{title}</h4>
            <p className="fs-6 fst-italic">{italicText}</p>
            {boldText && <p className="fs-6 fw-bold">{boldText}</p>}
            <Link to={linkToPage} className="btn btn-fun-btn fw-bold">
                {button}
            </Link>
        </article>
        
    );
};

export default HomePageItem;