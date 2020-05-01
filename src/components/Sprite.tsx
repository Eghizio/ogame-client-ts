import React from 'react';
// import './Sprite.css';
import { ISprite } from "../types/global";


const Sprite: React.FC<ISprite> = ({src, position, width, height}) => {
    return (
        <div
        style={{
            background: `transparent url(${src}) ${position} no-repeat`,
            ...(width && {width: width}),
            ...(height && {height: height})
        }} 
        /> 
    );
};


export default Sprite;