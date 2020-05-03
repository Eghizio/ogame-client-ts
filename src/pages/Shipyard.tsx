import React from 'react';
import Page from './Page';

export interface ShipyardProps{

}

const Shipyard: React.FC<ShipyardProps> = (props) => {
    return(
        <Page>
            <h1 style={styles.header}>Shipyard</h1>
            <div style={styles.content}></div>
        </Page>
    );
};

// eslint-disable-next-line
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
    
export default Shipyard;