import React from 'react';
import Page from './Page';

export interface GalaxyProps{

}

const Galaxy: React.FC<GalaxyProps> = (props) => {
    return(
        <Page>
            <h1 style={styles.header}>Galaxy</h1>
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
    
export default Galaxy;