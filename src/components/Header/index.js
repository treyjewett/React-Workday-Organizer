import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function Header() {
    return (
            <header className="jumbotron">
                <h1 className="display-3">Work Day Scheduler</h1>
                <p className="lead">A simple calendar app for scheduling your work day</p>
                <p id="currentDay" className="lead"></p>
            </header>
    )
};

export default Header;