import { Link } from "react-router-dom";

import React from 'react'

function Header() {
    return (
        <>
            <div className="container-fluid textcenter">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
            </div>
        </>
    );
}

export default Header;