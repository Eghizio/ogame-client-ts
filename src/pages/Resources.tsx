import React from 'react';
import Page from './Page';

export interface ResourcesProps{

}

const Resources: React.FC<ResourcesProps> = (props) => {
    return(
        <Page>
            <h1 style={styles.header}>Resources</h1>
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
    
export default Resources;