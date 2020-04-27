import React from 'react';

export interface TraderProps{

}

const Trader: React.FC<TraderProps> = (props) => {
    return(
        <main>
            <h1 style={styles.header}>Trader</h1>
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

export default Trader;