import React, { useState, ReactNode } from 'react';
import './Tooltip.css';

export interface TooltipProps{
    name?: string
    content?: string
    position: "top" | "bottom" | "right" | "left"
    children: ReactNode
}

// Need to style it xd
const Tooltip: React.FC<TooltipProps> = ({name, content, position, children}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div>
            <div className={`tooltip-container ${position}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {children}
                <div className="tooltip-body" style={{display: isHovered ? "block" : "none"}}>
                    <h5>{name}</h5>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
};

// eslint-disable-next-line
const styles = {

};

export default Tooltip;
