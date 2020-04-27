import React from 'react';

export interface AllianceProps{

}

const Alliance: React.FC<AllianceProps> = (props) => {
    return(
        <main>
            <h1 style={styles.header}>Alliance</h1>
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

export default Alliance;