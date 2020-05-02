import React, { useState } from 'react';
import './Tooltip.css';
import DefaultTooltip, { DefaultTooltipProps } from "./DefaultTooltip";

export interface TooltipProps extends DefaultTooltipProps{
    children: React.ReactNode
    position: "top" | "bottom" | "right" | "left"
    tooltip?: React.ReactNode //slot
}


// Implement css arrow based on position?
const Tooltip: React.FC<TooltipProps> = ({children, position, tooltip, name, content}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div>
            <div className="tooltip-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {children}
                {!isHovered ? null : tooltip
                    ?   <div className={`tooltip-body-${position}`}>
                            {tooltip}
                        </div>
                    : <DefaultTooltip position={position} name={name} content={content}/>
                }
            </div>
        </div>
    );
};

// eslint-disable-next-line
const styles = {

};

export default Tooltip;
