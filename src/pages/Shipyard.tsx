import React from 'react';

export interface ShipyardProps{

}

const Shipyard: React.FC<ShipyardProps> = (props) => {
    return(
        <main>
            <h1 style={styles.header}>Shipyard</h1>
            <div style={styles.content}></div>
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
    
export default Shipyard;