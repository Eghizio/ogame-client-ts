import React from 'react';
// import './TechnologyGrid.css';
// eslint-disable-next-line
import { GlobalContext } from '../../providers/GlobalProvider';
import TechnologyGridItem from './TechnologyGridItem';
import id from '../../utils/id';
import Global from '../../types/global';

export interface TechnologyGridProps{
    name: string
}

const TechnologyGrid: React.FC<TechnologyGridProps> = ({name}) => {
    //temp data source for mapping
    const context = React.useContext(GlobalContext);
    if(!context) return null;
    
    const buildings = Array.from(context.cdn.buildings.keys()).slice(0,12)
        .map((key, i) => ({
            uuid: id(),
            name: "Something mine",
            currentLevel: Math.floor(Math.random()*29+1),
            sprite: (context.cdn.buildings.get(key) as Global.Sprite),
            meetsRequirements: (i<6), //mock
            enoughResources: (i<4) //mock
        }));

    return (
        <div className="technology-grid" style={styles.tech}>
            <h2 style={styles.header}>
                {name}
            </h2>
            <div style={styles.grid}>
                {buildings && buildings.map(building => building && <TechnologyGridItem key={building.uuid} item={building}/>)}
            </div>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    tech: {
        margin: "0px auto",
        // marginTop: "100px", //doesnt work properly wtf, need some generic layout components
        width: "95%",
        padding: "1%",
        backgroundColor: "#222",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "space-between",
    },
    header: {
        margin: "5px",
        width: "100%",
        textAlign: "center" as const,
        backgroundColor: "#444"
    },
    grid: {
        display: "grid",
        alignItems: "center",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "5px"
    }
};

export default TechnologyGrid;