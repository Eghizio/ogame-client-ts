import React, { useState } from 'react';
import './Tooltip.css';
import DefaultTooltip, { DefaultTooltipProps } from "./DefaultTooltip";

export interface TooltipProps extends DefaultTooltipProps{
    children: React.ReactNode
    position: "top" | "bottom" | "right" | "left"
    tooltip?: React.ReactNode //slot
    style?: React.CSSProperties
}


// Implement with Portal?
const Tooltip: React.FC<TooltipProps> = ({children, position, tooltip, name, content, style}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div style={styles.tooltip}>
            <div className="tooltip-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {children}
                {!isHovered ? null : tooltip
                    ?   <div className={`tooltip-body-${position}`}>
                            {tooltip}
                        </div>
                    : <DefaultTooltip position={position} name={name} content={content} style={style}/>
                }
            </div>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    tooltip: {
        display: "inline-flex"
    }
};

export default Tooltip;
