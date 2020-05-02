import React from "react"

export interface PlayerClassProps {
    type?: "Miner" | "Warrior" | "Explorer"
}

const PlayerClass: React.FC<PlayerClassProps> = ({type}) => {
    return (
        <div style={{width: "35px", height: "35px", border: "1px solid orange", margin: "1px"}}>
            {type ? type.substring(0,2) : null}
        </div>
    );
};

export default PlayerClass;