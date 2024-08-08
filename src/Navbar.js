import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./App.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent custom-navbar">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#"></Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                    style={{ fontFamily: "Bronzier, Arial, sans-serif" }}
                >
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/kombatants">
                                Fighters
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tier-list">
                                Tier list
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex bold">
                        <p>Login</p>
                        {/* Login goes here */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
