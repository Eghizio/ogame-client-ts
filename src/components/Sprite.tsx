import React from 'react';
// import './Sprite.css';
import Global from "../types/global";

export interface SpriteProps extends Global.Sprite, React.HTMLAttributes<HTMLDivElement>{
    style?: React.CSSProperties
    children?: React.ReactNode
}

// Need to fix conditional rendering when using Sprite, and leave the fallback handling to Sprite
// need to support number width and height, add fallback background-image from static asset
const Sprite: React.FC<SpriteProps> = ({src, position, width, height, style, children}) => {
    const srcFallback = "https://qph.fs.quoracdn.net/main-qimg-a477b86f6aa9c1767332eae705e2fdb8"; // temp white img

    return (
        <div
        style={{
            background: `transparent url(${src || srcFallback}) ${position || "0px 0px"} no-repeat`,
            ...(width && {width: width}),
            ...(height && {height: height}),
            ...style
        }} 
        >
            {children}
        </div> 
    );
};


export default Sprite;