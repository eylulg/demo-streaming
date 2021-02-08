import "./Header.css";

export default function Header({ children, title }) {
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
      <span className="Title-Container">{title}</span>
    </div>
  );
}
