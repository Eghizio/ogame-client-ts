import React from "react";
import Page from "./Page";
import { QueueBar } from "../components";
// eslint-disable-next-line
import Modal from "../components/Modal";


export interface OverviewProps{

}

// Testing sprites
const Overview: React.FC<OverviewProps> = (props) => {
    const [showModal, setShowModal] = React.useState<boolean>(false);

    return(
        <Page>
            <h1 style={styles.header}>Overview</h1>
            <div style={styles.content}>
                <button onClick={() => setShowModal(true)}>Open Modal</button>
                <Modal isOpened={showModal} handleClose={() => setShowModal(false)}/>
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