import React from "react";
import "./App.css";

function App() {
  return (
    <div className="nav-background">
      <div className="nav-container">
        <header className="nav-header">
          <h1>
            <a href="#" className="nav-logo">
              Sabzlearn
            </a>
          </h1>
        </header>
        <nav>
          <ul className="nav-ul">
            <li>
              <a href="#" className="nav-link  active-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                News
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
