import React from 'react';
import Moon from './Moon';

interface PlanetProps{
    data: {name:string, coords: number[], id:number, moon:{name:string, id:number}|undefined}
}

const Planet: React.FC<PlanetProps> = ({data:{name, coords, moon}}) => {
    return(
        <div style={css.wrapper}>
            <div style={css.planet}>
                {moon && <Moon data={moon}/>}
            </div>
            <span style={css.span}>{name}</span>
            <span style={css.span}>{`[${coords[0]}:${coords[1]}:${coords[2]}]`}</span>
        </div>
    );
};

const css = {
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