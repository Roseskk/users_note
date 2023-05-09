import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className={"nav gap-3"}>
            <li className={"nav-item"}>
                <Link to={"/main"}>Main</Link>
            </li>
            <li className={"nav-item"}>
                <Link to={"/login"}>Login</Link>
            </li>
            <li className={"nav-item"}>
                <Link to={"/users"}>Users</Link>
            </li>
        </ul>
    );
};

export default Navbar;
