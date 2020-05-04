import React from 'react';
// import './ItemQueue.css';
import NextItem from './NextItem';
import CurrentItem from "./CurrentItem";

// will move that to ./types
export interface QueueItem{
    name: string
    nextLevel: number
    buildTime: number
}

export interface QueueItemProps{
    items: QueueItem[]
}

// Decouple to smaller components
const QueueItems: React.FC<QueueItemProps> = ({items}) => {
    const [currentItem, ...inQueue] = items;

    return (
        <div>
            <CurrentItem item={currentItem}/>
            <div style={styles.queueContainer}>
                {inQueue && inQueue.map(item => <NextItem item={item}/>)}
            </div>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    queueContainer: {
        display: "flex",
        justifyContent: "start",
        padding: "5px"
    }
};

export default QueueItems;