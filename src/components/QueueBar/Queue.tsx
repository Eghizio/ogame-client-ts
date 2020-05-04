import React from 'react';
// import './Queue.css';

export interface QueueProps{
    name: string
    items?: any[] //will be some sprite/data objects[]
}

const Queue: React.FC<QueueProps> = ({name, items}) => {
    return (
        <div style={styles.queue}>
            <div>
                <h3 style={styles.header}>{name}</h3>
            </div>
            <div style={styles.body}>
                {!(items && items.length) ? "The queue is empty" : <div></div> }
            </div>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    queue: {
        width: "25%",
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
        padding: "15px",
        border: "1px solid #000",
        borderRadius: "3px",
        backgroundColor: "#2a2a2a"
    }
};

export default Queue;