import React, { useContext } from 'react';
import { GlobalContext } from "../../providers/GlobalProvider";
import { Link } from 'react-router-dom';
import Clock from "./Clock";


const Header: React.FC = () => {
    const context = useContext(GlobalContext);
    const headerLinks = ["Notes", "Friends", "Search", "Settings", "Support", "Logout"]; // ..."Stats"

    return(
        <header style={styles.header}>
            <span>Player: <Link style={styles.link} to="/">{context && context.data.player.name}</Link></span>
            <span>
                <ul style={styles.ul}>
                    <li style={styles.li}><Link style={styles.link} to="/">Stats</Link> ({context && context.data.player.rank})</li>
                    {headerLinks.map(link => 
                        <li key={link} style={styles.li}><Link style={styles.link} to={`/${link.toLowerCase()}`}>{link}</Link></li>)}
                </ul>
            </span>
            <Clock/>
        </header>
    );
};

const styles = {
    header: {
        width: "80%",
        padding: "0 10%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    ul: {
        display: "inline-flex",
        padding: "0",
        listStyleType: "none",
    },
    li: {
        padding: "0 10px",
    },
    link: {
        textDecoration: "none",
        color: "white"
    }
};

export default Header;