import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../providers/GlobalProvider';


const Advertisement: React.FC = () => {
    const context = useContext(GlobalContext);

    if(!context) return null;
    return (
        <Link style={styles.link} to={context.data.advertisement.href}>
            <img style={styles.img}src={context.data.advertisement.bannerURL} alt="Advertisement"/>
        </Link>
    );
};

// eslint-disable-next-line
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