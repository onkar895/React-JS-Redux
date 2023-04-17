const navbar = () => {
    return (
        <nav className="Navbar">
            <h1>Gaming Blog</h1>

            <div className="links">
                <a href="./" style={{            // Inline styling for blog,  blue curly-bracket is for the dynamic values and yellow is for the objects means key value pairs.
                    color: "rgb(64, 191, 245)",
                    borderBottom: "1px solid rgb(64, 191, 245)",
                    borderRadius: "10px"
                }}>Home</a>

                < a href="./">Blog</a>
                <a href="./">About Us</a>
                <a href="./">Contact Us</a>
            </div>
        </nav>
    )
}

export default navbar;