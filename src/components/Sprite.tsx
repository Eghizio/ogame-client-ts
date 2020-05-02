import React from 'react';
// import './Sprite.css';
import Global from "../types/global";

export interface SpriteProps extends Global.Sprite{
    style?: React.CSSProperties
}

const Sprite: React.FC<SpriteProps> = ({src, position, width, height, style}) => {
    return (
        <div
        style={{
            background: `transparent url(${src}) ${position} no-repeat`,
            ...(width && {width: width}),
            ...(height && {height: height}),
            ...style
        }} 
        /> 
    );
};


export default Sprite;