import React from 'react';
import Planet from './Planet';

interface PlanetTabProps{

}

const maxPlanets = 5;
const planets: {name:string, coords: number[], id:number, moon:{name:string, id:number}|undefined}[]= [
    { name: "Planet 1", coords: [1,284,6], id: 1, moon: { name: "", id: 1} },
    { name: "Planet 2", coords: [1,284,7], id: 2, moon: { name: "", id: 2} },
    { name: "Planet 3", coords: [1,284,8], id: 3, moon: { name: "", id: 3} },
];

const PlanetTab: React.FC<PlanetTabProps> = (props) => {
    return(
        <aside style={css.aside}>
            <div style={css.colonised}>{planets.length}/{maxPlanets} Planets</div>
            {planets.map(p => <Planet key={p.id} data={p} />)}
        </aside>
    );
};

const css = {
    aside: {
        width: "120px",
        padding: "15px",
        textAlign: "center" as const,
    },
    colonised: {
        textAlign: "center" as const,
        border: "3px solid gray",
        borderRadius: "2px"
    }
};

export default PlanetTab;