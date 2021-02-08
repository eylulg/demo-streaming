import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import appStore from "../images/app-store.png";
import googlePlay from "../images/google-play.png";
import microsoft from "../images/microsoft-badge.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-Top">
        <a style={{ textDecoration: "none", color: "white" }} href="/">
          Home
        </a>
        <span>|</span>
        <a style={{ textDecoration: "none", color: "white" }} href="">
          Terms and Conditions
        </a>
        <span>|</span>
        <a style={{ textDecoration: "none", color: "white" }} href="">
          Privacy Policy
        </a>
        <span>|</span>
        <a style={{ textDecoration: "none", color: "white" }} href="">
          Collection Statement
        </a>
        <span>|</span>
        <a style={{ textDecoration: "none", color: "white" }} href="">
          Help
        </a>
        <span>|</span>
        <a style={{ textDecoration: "none", color: "white" }} href="">
          Manage Account
        </a>
      </div>
      <span className="Footer-Bottom">
        Copyright © 2021 DEMO Streaming. All Rights Reserved.
      </span>
      <div className="Icons">
        <div className="Logos">
          <img src={facebook}></img>
          <img src={twitter}></img>
          <img src={instagram}></img>
        </div>
        <div className="Badges">
          <img src={appStore}></img>
          <img src={googlePlay}></img>
          <img src={microsoft}></img>
        </div>
      </div>
    </div>
  );
}
