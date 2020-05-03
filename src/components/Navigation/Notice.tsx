import React from 'react';
// import './Notice.css';
import Global from '../../types/global';
import Tooltip from '../Tooltip';
import Emoji from "../Emoji";


// Styling fixes needed
const Notice: React.FC<Global.Notice> = ({name, description}) => {
    return (
        <div style={styles.wrapper}>
            <Tooltip name={name} content={description} position="top">
                <div style={styles.notice}>
                    <Emoji symbol="ℹ" label="info"/>
                </div>
            </Tooltip>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    wrapper: {
        padding: "10px"
    },
    notice: {
        width: "25px",
        height: "25px",
        borderRadius: "5px",
        backgroundColor: "#aaa",
        color: "white"
    }
};

export default Notice;