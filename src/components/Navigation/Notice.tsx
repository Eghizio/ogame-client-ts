import React from 'react';
// import './Notice.css';
import { INotice } from '../../types/global';
import Tooltip from '../Tooltip/Tooltip';

// Styling fixes needed
const Notice: React.FC<INotice> = ({name, description}) => {
    return (
        <Tooltip name={name} content={description} position="top">
            <div style={styles.notice}/>
        </Tooltip>
    );
};

// eslint-disable-next-line
const styles = {
    notice: {
        width: "25px",
        height: "25px",
        borderRadius: "5px",
        backgroundColor: "#aaa",
        color: "white"
    }
};

export default Notice;