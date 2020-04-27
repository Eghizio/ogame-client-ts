import React from 'react';

export interface OfficersProps{

}

export interface PlayerClassProps {
    type?: "Miner" | "Warrior" | "Explorer"
}

export interface OfficerProps {
    type: string
}

const Officers: React.FC<OfficersProps> = (props) => {
    //const [state, setState] = useState();
    
    const PlayerClass: React.FC<PlayerClassProps> = ({type}) => {
        return (
            <div style={{width: "35px", height: "35px", border: "1px solid orange", margin: "1px"}}>
                {type ? type.substring(0,2) : null}
            </div>
        );
    };

    const Officer: React.FC<OfficerProps> = ({type}) => {
        return (
            <div style={{width: "30px", height: "30px", border: "1px solid aquamarine", margin: "1px"}}>
                {type ? type.substring(0,2) : null}
            </div>
        );
    };

    return (
        <div style={{display: "flex"}}>
            <PlayerClass type={"Miner"}/>
            {["Comandor", "Admiral", "Mechanic", "Geologist", "Technocrat"].map(o => <Officer type={o} key={o}/>)}
        </div>
    );
};

// const styles = {

// };

export default Officers;