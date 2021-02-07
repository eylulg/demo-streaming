import { Link } from "react-router-dom";
import videoCamera from "../images/video-camera.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home-Container">
      <img src={videoCamera}></img>
      <Link to="/series">Populer Series</Link>
      <Link to="/movies">Populer Movies</Link>
    </div>
  );
};

export default Home;
