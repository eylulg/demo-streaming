function Header({ children, title }) {
    return (
        <div>
            <div style={{ width: "100vw", height: "100px", backgroundColor: "#3651a8" }}>
                {children}
                <a href="">Login</a>
                <button>Start your free trial</button>
            </div>
            <div style={{ width: "100vw", height: "70px", backgroundColor: "#474747" }}>
                {title}
            </div>
        </div>
    );
};

export default Header;
