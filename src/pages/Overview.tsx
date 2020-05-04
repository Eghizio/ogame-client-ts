import React from 'react';

import Page from './Page';
import { QueueBar } from '../components';


export interface OverviewProps{

}

// Testing sprites
const Overview: React.FC<OverviewProps> = (props) => {
    return(
        <Page>
            <h1 style={styles.header}>Overview</h1>
            <div style={styles.content}>
                stuff
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
        background: "lightgray",
        // temp
        overflow: "auto"
    }
};

export default Overview;