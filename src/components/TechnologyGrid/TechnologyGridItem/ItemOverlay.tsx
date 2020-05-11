import React from 'react';
// import './ItemOverlay.css';

export interface ItemOverlayProps{
    meetsRequirements: boolean
    enoughResources: boolean
    children?: React.ReactNode
    style?: React.CSSProperties
}

// i want to use it over the element tho,
// but interacts with sprite in wrong way 
// with orange overlay using bg-image (same as sprite)
const ItemOverlay: React.FC<ItemOverlayProps> = ({meetsRequirements, enoughResources, children, style}) => {
    return (
        <div
        className="item-overlay"
        style={{
            ...styles.default,
            ...(!meetsRequirements && styles.inactiveOverlay),
            ...(meetsRequirements && !enoughResources && styles.orangeOverlay),
            ...(style && style)
        }}
        > 
            {children}
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    default: {
        // zIndex: 3,
        // pointerEvents: "none" as const,
        width: "100%",
        height: "100%",
        borderRadius: "5px"
    },
    orangeOverlay: {
        backgroundImage: "repeating-linear-gradient(135deg, rgba(255, 165, 0, 0.4) 0.5%, rgba(255, 165, 0, 0.4) 4%, rgba(255, 165, 0, 0.1) 4.5%, rgba(255, 165, 0, 0.1) 8%)",
    },
    inactiveOverlay: {
        // filter: "grayscale(1)" //moved to sprite
    }
};

export default ItemOverlay;