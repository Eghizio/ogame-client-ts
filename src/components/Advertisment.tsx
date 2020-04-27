import React from 'react';
import { Link } from 'react-router-dom';

export interface AdvertismentProps{
    bannerURL: string;
    href: string;
}

const Advertisment: React.FC<AdvertismentProps> = ({bannerURL, href}) => {
    return(
        <Link style={css.link} to={href}>
            <img style={css.img}src={bannerURL} alt="Advertisment"/>
        </Link>
    );
};

const css = {
    img: {
        width: "120px",
        height: "600px"
    },
    link: {
        textDecoration: "none",
        color: "white",
        padding: "20px"
    }
};

export default Advertisment;