import React from 'react';
import pokemon from './images/catch-pokemon.jpg';
import movie from './images/main-page.png';

function Project() {
    return (
        <div>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet"></link>
            <h1 data-testid="h1tag" className="title">Projects</h1>
            
            <div className="pokemon-img">
            <a href="https://bc-project-2.herokuapp.com/" className="img">
            <img src={pokemon} alt="Pokemon Team Builder" width="500px" height="250px"></img></a>
                <div className="overlay">
                    <div className="text">Pokemon Team Builder</div>
                </div>  
            </div>
            {' '}
            <div>
            <a href="http://aqueous-reef-39758.herokuapp.com/" className="img">
            <img src={movie} alt="Movie Search" width="500px" height="350px"></img></a>
            </div>
                <div className="overlay">
                    <div className="text">Movie Search</div>
                </div>  
        </div>
    )
}

export default Project