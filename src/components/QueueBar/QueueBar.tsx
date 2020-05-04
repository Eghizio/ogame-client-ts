import React from 'react';
// import './QueueBar.css';
import Queue from "./Queue";

export interface QueueBarProps{

}

const QueueBar: React.FC<QueueBarProps> = (props) => {
    const buildings = [
        { name: "Metal Mine", nextLevel: 5, buildTime: 10800000*1 },
        { name: "Metal Mine", nextLevel: 6, buildTime: 10800000*2 },
        { name: "Metal Mine", nextLevel: 7, buildTime: 10800000*3 },
    ];

    return (
        <div style={styles.queueBar}>
            <Queue name="Buildings" items={buildings}/>
            <Queue name="Research"/>
            <Queue name="Shipyard"/>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    queueBar: {
        display: "flex",
        alignItems: "start",
        justifyContent: "space-between",
        padding: "15px"
    }
};

export default QueueBar;