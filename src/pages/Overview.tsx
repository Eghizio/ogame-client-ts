import React from "react";
import Page from "./Page";
// eslint-disable-next-line
import { QueueBar, Tooltip } from "../components";
import { Modal } from "../components";



export interface OverviewProps{

}

// Testing sprites
const Overview: React.FC<OverviewProps> = (props) => {
    const [showModal, setShowModal] = React.useState<boolean>(true);
    const [showModal2, setShowModal2] = React.useState<boolean>(true);
    const [showModal3, setShowModal3] = React.useState<boolean>(true);


    const first = { left: "0", width: "300px", height: "300px" };
    const second = { right: "0", width: "200px", height: "auto" };
    const third = { top: "0", width: "200px", height: "auto" };

    return(
        <Page>
            <h1 style={styles.header}>Overview</h1>
            <div style={styles.content}>

                <button onClick={() => setShowModal(true)} style={styles.btn}>
                    Open Modal
                </button>
                <Modal isOpened={showModal} handleClose={() => setShowModal(false)} title="Custom Modal" style={first}>
                    <Tooltip position="right" name="Modal embedded image" style={{color: "#fff"}}>
                        <img src="https://applications.comastuff.com/templates/ogame/logo.png" alt="OGame logo" width="200px" height="auto"/>
                    </Tooltip>
                    some stuff inside modal
                </Modal>

                <button onClick={() => setShowModal2(true)} style={styles.btn}>
                    Open Modal2
                </button>
                <Modal isOpened={showModal2} handleClose={() => setShowModal2(false)} title="Second modal" style={second}>
                    <p>
                        test
                    </p>
                </Modal>

                <button onClick={() => setShowModal3(true)} style={styles.btn}>
                    Open Modal3
                </button>
                <Modal isOpened={showModal3} handleClose={() => setShowModal3(false)} title="Third modal" style={third}>
                    <p>
                        test
                    </p>
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
        overflow: "auto",
    },
    btn: { //temp
        margin: "20px"
    }
};

export default Overview;