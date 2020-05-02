import React from 'react';
import PlayerClass from "./PlayerClass";
import Officer from "./Officer";


export interface OfficersBarProps{

}

const OfficersBar: React.FC<OfficersBarProps> = (props) => {
    const playerClasses: ["Miner", "Warrior", "Explorer"] = ["Miner", "Warrior", "Explorer"];
    const officers = ["Comandor", "Admiral", "Mechanic", "Geologist", "Technocrat"];

    // for testing
    const randomClass = playerClasses[ Math.floor( Math.random()*playerClasses.length ) ];

    return (
        <div style={{display: "flex"}}>
            <PlayerClass name={randomClass}/>
            {officers.map(officer => <Officer key={officer} name={officer} />)}
        </div>
    );
};

// eslint-disable-next-line
const styles = {

};

export default OfficersBar;