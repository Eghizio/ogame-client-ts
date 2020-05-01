import React from 'react';

export interface FleetProps{

}

const Fleet: React.FC<FleetProps> = (props) => {
    return(
        <main>
            <h1 style={styles.header}>Fleet</h1>  
            <div style={styles.content}></div>
        </main>
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
    
export default Fleet;