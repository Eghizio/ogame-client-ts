import React from 'react';
// import './QueueBar.css';
import Queue from "./Queue";

export interface QueueBarProps{

}

const QueueBar: React.FC<QueueBarProps> = (props) => {
    return (
        <div style={styles.queueBar}>
            <Queue name="Buildings"/>
            <Queue name="Research"/>
            <Queue name="Shipyard"/>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    queueBar: {
        display: "flex",
        justifyContent: "space-between",
        padding: "15px"
    }
};

export default QueueBar;