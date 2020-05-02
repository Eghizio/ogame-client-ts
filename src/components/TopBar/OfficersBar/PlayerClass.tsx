import React from "react"

export interface PlayerClassProps {
    name?: "Miner" | "Warrior" | "Explorer"
}

const PlayerClass: React.FC<PlayerClassProps> = ({name}) => {
    return (
        <div style={{width: "35px", height: "35px", border: "1px solid orange", margin: "1px"}}>
            {name ? name.substring(0,2) : null}
        </div>
    );
};

export default PlayerClass;