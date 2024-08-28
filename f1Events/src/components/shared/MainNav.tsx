import { Link } from "react-router-dom";

const MainNav = () => {
    return (
        <nav className="navbar navbar-expand-md bg-dark position-sticky top-0 rounded-bottom">
            <Link to="/" className="navbar-brand">
                <img  src="/images/F1Logo.png" alt="image of logo" className="logo-small"/>
            </Link>
            <div className="navbar-collapse collapse d-flex justify-content-end px-3 fw-bold font-monospace">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link m-3 text-light">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/driver" className="nav-link m-3 text-light">Drivers </Link>
                    </li>
                    <li className="nav-item">
                        <Link  to="/teams" className="nav-link m-3 text-light">Teams </Link>
                    </li>
                    <li className="nav-item">
                        <Link  to="/race" className="nav-link m-3 text-light">Race</Link>
                    </li>
                    <li className="nav-item">
                        <Link  to="/quiz" className="nav-link m-3 text-light">Quiz </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link m-3 text-light">Register </Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export default MainNav;