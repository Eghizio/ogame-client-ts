import React, { useContext } from 'react';
import { GlobalContext } from '../providers/GlobalProvider';
import { Link } from 'react-router-dom';
import Sprite from './Sprite';


const Advertisement: React.FC = () => {
    const context = useContext(GlobalContext);

    if(!context) return null;
    return (
        <Link style={styles.link} to={context.data.advertisement.href}>
            <Sprite src={context.data.advertisement.bannerURL} width="120px" height="600px"/>
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
        padding: "5px"
    }
};


export default Advertisement;