import React from 'react';
import PlayerClass from "./PlayerClass";
import Officer from "./Officer";


export interface OfficersBarProps{

}

const OfficersBar: React.FC<OfficersBarProps> = (props) => {
    const officers = ["Comandor", "Admiral", "Mechanic", "Geologist", "Technocrat"];

    return (
        <div style={{display: "flex"}}>
            <PlayerClass type={"Miner"}/>
            {officers.map(o => <Officer type={o} key={o}/>)}
        </div>
    );
};

// eslint-disable-next-line
const styles = {

};

export default OfficersBar;