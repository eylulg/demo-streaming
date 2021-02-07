import "./Header.css";

function Header({ children, title }) {
  return (
    <div className="Header">
      <div className="Header-Container">
        {children}
        <div className="Right-Side">
          <a className="Login" href="">
            Login
          </a>
          <button className="Button">Start your free trial</button>
        </div>
      </div>
      <div className="Title-Container">{title}</div>
    </div>
  );
}

export default Header;
