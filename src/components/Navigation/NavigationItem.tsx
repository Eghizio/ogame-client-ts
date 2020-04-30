import React from 'react';
import { NavItem } from "../../types/global";
import { Link } from 'react-router-dom';
import Emoji from "../Emoji";


const NavigationItem: React.FC<NavItem> = ({name, icon}) => {
    return(
        <li style={styles.li}>
            <Link style={styles.link} to={`/${name.toLowerCase()}`}>
                <div style={styles.primary}>
                    {name}
                </div>
            </Link>
            <Link style={styles.link} to={`/${name.toLowerCase()}/alt`}>
                <div style={styles.alt}>
                    <Emoji label="Alt">
                        {icon !== "" ? icon : "ℹ️"}
                    </Emoji>
                </div>
            </Link>
        </li>
    );
};

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
    }
};

export default NavigationItem;

