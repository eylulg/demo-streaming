import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import appStore from "../images/app-store.png";
import googlePlay from "../images/google-play.png";
import microsoft from "../images/microsoft-badge.png";

function Footer() {
    return (
        <div style={{ width: "100vw", height: "200px", backgroundColor: "#212121" }}>
            <a href="/">Home</a>
            <span>|</span>
            <a href="">Terms and Conditions</a>
            <span>|</span>
            <a href="">Privacy Policy</a>
            <span>|</span>
            <a href="">Collection Statement</a>
            <span>|</span>
            <a href="">Help</a>
            <span>|</span>
            <a href="">Manage Account</a>
            <span>Copyright © 2021 DEMO Streaming. All Rights Reserved.</span>
            <img src={facebook}></img>
            <img src={twitter}></img>
            <img src={instagram}></img>
            <img src={appStore}></img>
            <img src={googlePlay}></img>
            <img src={microsoft}></img>
        </div>
    );
};

export default Footer;
