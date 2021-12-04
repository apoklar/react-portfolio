import React from 'react';
import {Link} from 'react-router-dom';
import PDF from './src/resume1.pdf';

function Nav() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet"></link>
            
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <p className="navbar-brand">Andrea Poklar</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/about" style={{ textDecoration: 'none' }}><li className="nav-item">
                        <p className="nav-link" aria-current="page">About</p>
                        </li></Link>
                        <Link to="/project" style={{ textDecoration: 'none' }}><li className="nav-item">
                        <p className="nav-link" aria-current="page">Projects</p>
                        </li></Link>
                        <Link to="/contact" style={{ textDecoration: 'none' }}><li className="nav-item">
                        <p className="nav-link" aria-current="page">Contact</p>
                        </li></Link>
                        <a href={PDF}>Resume</a>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;
