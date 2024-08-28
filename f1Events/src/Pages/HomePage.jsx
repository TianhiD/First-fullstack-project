import HomePageList from "../components/index/HomePageList";

const HomePage = () => {
    const leftColumnItems = [
        {
            title: "Drivers👤",
            italicText: "Formula 1 draws talent from across the world, from seasoned veterans to bright newcomers. Formula 1 attracts talents from around the globe, that brings their distinctive styles and cultural influences to the high-stakes competition.",
            boldText: "Explore the list of drivers participating in the event.",
            linkToPage: "/driver",
            button: "View Drivers"
        },
        {
            title: "Teams👥",
            italicText: "Formula 1 teams are responsible for designing, building, and racing the cars.",
            boldText: "Discover the teams and their racing cars in the competition.",
            linkToPage: "/teams",
            button: "View Teams"
        },
        {
            title: "Races🏆",
            italicText: "The Formula 1 calendar includes races held at iconic circuits around the globe.",
            boldText: "Check out information about the races, including winners and locations.",
            linkToPage: "/race",
            button: "View Races"
        }
    ];
    
    const rightColumnItems = [
        {
            title: "Register for the Race📝",
            italicText: "Register to participate in our next exciting race!",
            linkToPage: "/register",
            button: "Register Now"
        },
        {
            title: "Formula 1 Quiz🧠",
            italicText: "Test your Formula 1 knowledge with our fun quiz!",
            linkToPage: "/quiz",
            button: "Take the Quiz"
        },
        {
            title: "Race-game🏁",
            italicText: "Play our fun racing game! 🏎️💨",
            linkToPage: "/racing",
            button: "Play the Game"
        }
    ];

    return (
        <section className="container mt-4 p-4 w-50  border border-4 border-fun rounded">
            <h1 className="fs-2 text-dark mb-4">Welcome to the Formula 1 Racing Event!</h1>
            <div className="row">
            <HomePageList items={leftColumnItems} className="col-md-8" />
            <HomePageList items={rightColumnItems} className="col-md-4" />
            </div>
        </section>
    );
};

export default HomePage;