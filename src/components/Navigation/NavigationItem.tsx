import React, { useState } from 'react';
import Global from "../../types/global";
import { Link } from 'react-router-dom';
import Emoji from "../Emoji";


const NavigationItem: React.FC<Global.NavItem> = ({name, icon}) => {
    const [mainHover, setMainHover] = useState<boolean>(false);
    const [altHover, setAltHover] = useState<boolean>(false); 

    return(
        <li style={styles.li}>
            <Link style={styles.link} to={`/${name.toLowerCase()}`} onMouseEnter={() => setMainHover(true)} onMouseLeave={() => setMainHover(false)}>
                <div style={{...styles.primary, ...(mainHover && styles.hovered)}}>
                    {name}
                </div>
            </Link>
            <Link style={styles.link} to={`/${name.toLowerCase()}/alt`} onMouseEnter={() => setAltHover(true)} onMouseLeave={() => setAltHover(false)}>
                <div style={{...styles.alt, ...(altHover && styles.hovered)}}>
                    <Emoji symbol={icon ? icon : "ℹ️"} label={`alternative ${name}`} />
                </div>
            </Link>
        </li>
    );
};

// eslint-disable-next-line
const styles = {
    li: {
        display: "inline-flex",
        margin: "5px",
        height: "30px",
        backgroundColor: "none"
    },
    link: {
        textDecoration: "none",
        color: "white" //"#61dafb"
    },
    primary: {
        width: "110px",
        height: "30px",
        backgroundColor: "#7695aa",
        textAlign: 'center' as const,
        verticalAlign: "middle",
        lineHeight: "30px"
    },
    alt: {
        width: "30px",
        height: "30px",
        margin: "0 10px",
        backgroundColor: "#7695aa",
        textAlign: 'center' as const,
        verticalAlign: "middle",
        lineHeight: "30px"
    },
    hovered: {
        backgroundColor: "#b8bdb5",
        color: "#222"
    }
};

export default NavigationItem;