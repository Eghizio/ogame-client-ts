import React from 'react';

export interface LogoProps{

}

const Logo: React.FC<LogoProps> = (props) => {
    return (
        <img src={"https://applications.comastuff.com/templates/ogame/logo.png"} alt="ogame_logo" style={styles.img} />
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