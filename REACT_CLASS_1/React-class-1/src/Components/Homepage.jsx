import React, { useState } from "react";
import "./Homepage.css";

function Homepage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleToggle = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div className="homepage-container">
            <div className="status-card">
                <h2>{isLoggedIn ? "Welcome back!" : "Please login"}</h2>
                <p>{isLoggedIn ? "You are currently logged in." : "You are currently signed out."}</p>
                <button 
                    className={`btn ${isLoggedIn ? 'btn-logout' : 'btn-login'}`}
                    onClick={handleToggle}
                >
                    {isLoggedIn ? "Logout" : "Login"}
                </button>
            </div>
        </div>
    );
}

export default Homepage;
