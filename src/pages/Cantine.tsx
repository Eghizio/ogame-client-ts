import React from 'react';
import Page from './Page';

export interface CantineProps{

}

const Cantine: React.FC<CantineProps> = (props) => {
    return(
        <Page>
            <h1 style={styles.header}>Cantine</h1>
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
    
export default Cantine;