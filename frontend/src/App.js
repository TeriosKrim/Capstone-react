import React from "react";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Kombatants from "./Kombatants";
import About from "./About";
import Tier from "./Tier/Tier";
import "./App.css"; // Import the consolidated CSS file
import Scorpion from "./Scorpion";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    SignIn,
    SignUp,
    UserButton,
    useUser,
    useAuth,
} from "@clerk/clerk-react";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key!");
}
const clerkPublishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

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
        path: "/tier-list",
        element: (
            <>
                <Navbar />
                <Tier />
            </>
        ),
    },

    {
        path: "/sign-in/*",
        element: (
            <div className="signin-wrapper">
                <SignIn routing="path" path="/sign-in" />{" "}
            </div>
        ),
    },

    { path: "/sign-up/*", element: <SignUp routing="path" path="/sign-up" /> },
]);

const App = () => {
    return (
        <ClerkProvider
            publishableKey={clerkPublishableKey}
            navigate={(to) => myRoutes.navigate(to)}
        >
            <RouterProvider router={myRoutes} />
        </ClerkProvider>
    );
};

export default App;
