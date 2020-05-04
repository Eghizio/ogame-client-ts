import React from 'react';
// import './DefaultTooltip.css';

export interface DefaultTooltipProps extends React.HTMLAttributes<HTMLDivElement>{
    position: "top" | "bottom" | "right" | "left"
    name?: string
    content?: string
    style?: React.CSSProperties
}

const DefaultTooltip: React.FC<DefaultTooltipProps> = ({position, name, content, style}) => {
    return (
        <div className={`tooltip-body-default tooltip-body-${position}`} style={style}>
            <h4 style={styles.header}>
                {name || "Name"}
            </h4>
            {content && <p>{content}</p>}
            <div className={`arrow-${position}`}/>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    header: {
        whiteSpace: "nowrap" as const
    }
};

export default DefaultTooltip;