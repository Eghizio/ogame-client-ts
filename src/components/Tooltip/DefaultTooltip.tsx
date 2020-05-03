import React from 'react';
// import './DefaultTooltip.css';

export interface DefaultTooltipProps{
    position: "top" | "bottom" | "right" | "left"
    name?: string
    content?: string
    style?: React.CSSProperties
}

const DefaultTooltip: React.FC<DefaultTooltipProps> = ({position, name, content, style}) => {
    return (
        <div className={`tooltip-body-default tooltip-body-${position}`} style={style}>
            <h3>{name || "Name"}</h3>
            <p>{content || "Content"}</p>
            <div className={`arrow-${position}`}/>
        </div>
    );
};

// eslint-disable-next-line
const styles = {

};

export default DefaultTooltip;