import React, { useContext } from 'react';
import Planet from './Planet';
import { GlobalContext } from '../../providers/GlobalProvider';

// Need to fix paddings/margins on side components
const PlanetBar: React.FC = () => {
    const context = useContext(GlobalContext);

    if(!context) return null;
    return(
        <aside style={styles.aside}>
            <div style={styles.colonised}>{context.data.planets.length}/{context.data.maxPlanets} Planets</div>
            {context.data.planets.map(planet => <Planet key={planet.id} name={planet.name} coords={planet.coords} id={planet.id} moon={planet.moon}/>)}
        </aside>
    );
};

// eslint-disable-next-line
const styles = {
    aside: {
        width: "120px",
        padding: "20px 25px",
        textAlign: "center" as const,
    },
    colonised: {
        textAlign: "center" as const,
        border: "3px solid gray",
        borderRadius: "2px"
    }
};

export default PlanetBar;