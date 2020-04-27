import React from 'react';

export interface OverviewProps{

}

const Overview: React.FC<OverviewProps> = (props) => {
    return(
        <main>
            <h1 style={styles.header}>Overview</h1>
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

export default Overview;