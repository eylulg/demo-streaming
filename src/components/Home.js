import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/series">Series</Link>
            <Link to="/movies">Movies</Link>
        </div>
    );
};

export default Home;