import React from 'react';

export interface GalaxyProps{

}

const Galaxy: React.FC<GalaxyProps> = (props) => {
    return(
        <main>
            <h1 style={styles.header}>Galaxy</h1>
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
    
export default Galaxy;