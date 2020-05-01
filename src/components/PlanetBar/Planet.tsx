import React from 'react';
import Moon from './Moon';

// Should i move all of the props of components to props.d.ts type file or keep it with the component?
// I could already use the type from global.d.ts although its kinda temporary data store
interface PlanetProps{
    id: number
    name: string
    coords: number[]
    moon?: {
        id: number
        name: string
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

// eslint-disable-next-line
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