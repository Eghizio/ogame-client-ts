import React from 'react';

export interface LogoProps{
    style?: React.CSSProperties
}

const Logo: React.FC<LogoProps> = ({style}) => {
    return (
        <img src={"https://applications.comastuff.com/templates/ogame/logo.png"} alt="ogame_logo" style={{...styles.img, ...styles}} />
    );
};

// eslint-disable-next-line
const styles = {
    img: {
        width: "200px",
        height: "auto",
        padding: "10px"
    }
};

export default Logo;