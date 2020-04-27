import React from 'react';
import { Link } from 'react-router-dom';

export interface AdvertisementProps{
    bannerURL: string
    href: string
}

const Advertisement: React.FC<AdvertisementProps> = ({bannerURL, href}) => {
    return(
        <Link style={styles.link} to={href}>
            <img style={styles.img}src={bannerURL} alt="Advertisement"/>
        </Link>
    );
};

const styles = {
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

export default Advertisement;