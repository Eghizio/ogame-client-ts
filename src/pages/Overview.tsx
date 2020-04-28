import React, { useContext } from 'react';
import { GlobalContext } from "../providers/GlobalProvider"
import Sprite from '../components/Sprite';

export interface OverviewProps{

}

const Overview: React.FC<OverviewProps> = (props) => {
    const { cdn } = useContext(GlobalContext)
    const sprite = cdn.buildings[1]

    return(
        <main>
            <h1 style={styles.header}>Overview</h1>
            <div style={styles.content}>
                <Sprite {...sprite}/>
            </div>
        </main>
    );
};

const styles = {
    header: {
        color: "white"
    },
    content: {
        width: "95%",
        height: "50vh",
        background: "lightgray"
    }
};

export default Overview;