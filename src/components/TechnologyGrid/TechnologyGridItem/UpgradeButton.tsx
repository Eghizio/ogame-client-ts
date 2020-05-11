import React, { useState } from 'react';
// import './UpgradeButton.css';
import Tooltip from "../../Tooltip";

export interface UpgradeButtonProps{
    name: string
    currentLevel: number
    upgrade: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    style?: React.CSSProperties
}

// id like to keep the tooltip here 
// but would need more props to control it conditionaly 
// not to interact in wrong way with Item tooltip
const UpgradeButton: React.FC<UpgradeButtonProps> = ({name, currentLevel, upgrade, style}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <Tooltip position="top" name={`Upgrade ${name} to level ${currentLevel+1}!`}>
            <div
            className="button-upgrade"
            style={{...styles.upgrade, ...(isHovered && styles.hovered), ...style}}
            onClick={upgrade}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            />
        </Tooltip>
    );
};

// eslint-disable-next-line
const styles = {
    upgrade: {
        width: "25px",
        height: "15px",
        backgroundColor: "lightgreen",
        borderRadius: "4px 0px 5px 0px",
    },
    hovered: {
        backgroundColor: "lawngreen"
    }
};

export default UpgradeButton;