import { Link } from "react-router-dom";
import videoCamera from "../images/video-camera.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home-Container">
      <div className="Image-Container">
        <img className="Image-Camera" src={videoCamera}></img>
        <Link className="Link-Style" to="/series">
          SERIES
        </Link>
      </div>
      <div className="Image-Container">
        <img className="Image-Camera" src={videoCamera}></img>
        <Link className="Link-Style" to="/movies">
          MOVIES
        </Link>
      </div>
    </div>
  );
};

export default Home;
