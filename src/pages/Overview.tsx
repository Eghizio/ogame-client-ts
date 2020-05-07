import React from "react";
import Page from "./Page";
import { QueueBar, Modal, Tooltip } from "../components";
// eslint-disable-next-line


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
                <Modal isOpened={showModal} handleClose={() => setShowModal(false)} title="Custom Modal" width="500px" height="500px">
                    <Tooltip position="right" name="Modal embedded image" style={{color: "#fff"}}>
                        <img src="https://applications.comastuff.com/templates/ogame/logo.png" alt="OGame logo" width="200px" height="auto"/>
                    </Tooltip>
                    some stuff inside modal
                </Modal>

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