import React from 'react';
import PlayerClass from "./PlayerClass";
import Officer from "./Officer";
import Global from '../../../types/global';


const OfficersBar: React.FC = () => {
    const playerClasses: Global.PlayerClass[] = ["Miner", "Warrior", "Explorer"];
    const officers: Global.Officer[] = ["Commander", "Admiral", "Engineer", "Geologist", "Technocrat"];

    // for testing
    const randomClass = playerClasses[ Math.floor( Math.random()*playerClasses.length ) ];

    return (
        <div style={styles.officersBar}>
            <PlayerClass name={randomClass}/>
            <div style={styles.officers}>
                {officers.map(officer => <Officer key={officer} name={officer} />)}
            </div>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    officersBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    officers: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    }
};

export default OfficersBar;