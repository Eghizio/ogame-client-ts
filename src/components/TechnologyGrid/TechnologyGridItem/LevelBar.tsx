import React from 'react';
// import './LevelBar.css';

export interface LevelBarProps{
    level: number
    style?: React.CSSProperties
}

// currentAmount in case of fleet and def
const LevelBar: React.FC<LevelBarProps> = ({level, style}) => {
    return (
        <div className="level-bar" style={{...styles.levelBar, ...style}}>
            <span>{level}</span>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    levelBar: {
        textAlign: "right" as const,
        paddingRight: "7px",
        width: "90%",
        height: "20px",
        backgroundColor: "#333",
        borderRadius: "9px 0px 4px 0px"
    }
};

export default LevelBar;