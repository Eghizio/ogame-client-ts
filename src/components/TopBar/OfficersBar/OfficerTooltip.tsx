import React from 'react';
// import './OfficerTooltip.css';

export interface OfficerTooltipProps{
    name: string
}

const OfficerTooltip: React.FC<OfficerTooltipProps> = ({name}) => {
    return (
        <div style={styles.tooltip}>
            <h3 style={styles.header}>{name}</h3>
            <p>Hire {name}!</p>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    tooltip: {
        width: "150px",
        padding: "5px",
        textAlign: "left" as const,
        backgroundColor: "#222",
        border: "2px sotrd #aaa",
        borderRadius: "5px"
    },
    header: {
        margin: "0"
    }
};

export default OfficerTooltip;