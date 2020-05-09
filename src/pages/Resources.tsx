import React from 'react';
import Page from './Page';
import { QueueBar, TechnologyGrid } from '../components';

export interface ResourcesProps{

}

const Resources: React.FC<ResourcesProps> = (props) => {
    return(
        <Page>
            <h1 style={styles.header}>Resources</h1>
            <div style={styles.content}>
                <TechnologyGrid name="Resource facilities"/>
            </div>
            <QueueBar/>
        </Page>
    );
};

// eslint-disable-next-line
const styles = {
    header: {
        color: "white"
    },
    content: {
        width: "100%",
        height: "50vh",
        background: "lightgray"
    }
};
    
export default Resources;