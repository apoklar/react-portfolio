import React from 'react';
import Photo from "../images/catch-pokemon.jpg";

function Project() {
    return (
        <div>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet"></link>
            <h1 data-testid="h1tag" className="title">Projects</h1>
            
            <div>
            <a href="https://bc-project-2.herokuapp.com/" className="img">
            <img src={Photo} alt="Pokemon Team Builder" width="500px" height="250px"></img></a>
            </div>
            <b></b>
            <div>
            <a href="https://mikeyrod22.github.io/what-would-kanye-do/" className="img">
            <img src="public/catch-pokemon.jpg" alt="What Would Kanye Do?" width="500px" height="250px"></img></a>    
            </div>

        </div>
    )
}

export default Project