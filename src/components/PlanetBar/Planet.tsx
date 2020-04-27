import React from 'react';
import Moon from './Moon';

interface PlanetProps{
    name: string
    coords: number[]
    id: number
    moon?: {
        name: string
        id: number
    }
}

const Planet: React.FC<PlanetProps> = ({name, coords, id, moon}) => {
    return(
        <div style={styles.wrapper}>
            <div style={styles.planet}>
                {moon && <Moon name={moon.name} id={moon.id}/>}
            </div>
            <span style={styles.span}>{name}</span>
            <span style={styles.span}>{`[${coords[0]}:${coords[1]}:${coords[2]}]`}</span>
        </div>
    );
};

const styles = {
    wrapper: {
        display: "inline-block",
        margin: "10px",
        textAlign: "center" as const,
    },
    planet: {
        width: "80px",
        height: "80px",
        backgroundColor: "lightblue",
        borderRadius: "50%",
    },
    span: {
        display: "inline-block",
        
    }
};
export default Planet;