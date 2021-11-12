import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img
                    src="https://user-images.githubusercontent.com/6764957/52892445-9045cf80-3136-11e9-9d5e-a1c47e505372.png"
                    alt=""/>
            </header>
            <nav className="nav">
                <div>
                    Profile
                </div>
            </nav>
            <div className="content">
                Main content
            </div>
        </div>
    );
}

export default App;
