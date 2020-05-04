import React from 'react';
// import './Queue.css';
import QueueItems from './QueueItems';


export interface QueueProps{
    name: string
    items?: any[] //will be some sprite/data objects[]
}

// Should queue link to Resources/Research/Shipyard in case of beeing empty?
const Queue: React.FC<QueueProps> = ({name, items}) => {
    return (
        <div style={styles.queue}>
            <div>
                <h3 style={styles.header}>{name}</h3>
            </div>
            <div style={styles.body}>
                {!(items && items.length) 
                ?   "The queue is empty"
                :    <QueueItems items={items}/>
                }
            </div>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    queue: {
        width: "30%",
        padding: "5px",
        backgroundColor: "#222",
        borderRadius: "5px",
        border: "",
        textAlign: "center" as const
    },
    header: {
        margin: "5px"
    },
    body: {
        marginTop: "10px",
        padding: "5px 10px",
        border: "1px solid #000",
        borderRadius: "3px",
        backgroundColor: "#2a2a2a"
    }
};

export default Queue;