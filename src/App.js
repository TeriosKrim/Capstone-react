import React from "react";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Kombatants from "./Kombatants";
import About from "./About";
import Tier from "./Tier";
import "./App.css"; // Import the consolidated CSS file
import Scorpion from "./Scorpion";

const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Navbar />
                <Home />
            </>
        ),
    },
    {
        path: "/kombatants",
        element: (
            <>
                <Navbar />
                <Kombatants />
            </>
        ),
    },
    {
        path: "/scorpion",
        element: (
            <>
                <Navbar />
                <Scorpion />
            </>
        ),
    },
    {
        path: "/about",
        element: (
            <>
                <Navbar />
                <About />
            </>
        ),
    },
    {
        path: "/tier",
        element: (
            <>
                <Navbar />
                <Tier />
            </>
        ),
    },
]);

const App = () => {
    return <RouterProvider router={myRoutes} />;
};

export default App;
