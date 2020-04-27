import React from 'react';
import { Link } from 'react-router-dom';
import Clock from "./Clock";

export interface HeaderProps{

}

const player = {
    name: "Eghizio",
    rank: 420
};

// Gracz: Eghizio Statystyki (566) Notatki Znajomi Szukaj Ustawienia Support Wyloguj 23.10.2019 19:01:59
const Header: React.FC<HeaderProps> = (props) => {

    
    
    return(
        <header style={styles.header}>
            <span>Player: <Link style={styles.link} to="/">{player.name}</Link></span>
            <span>
                <ul style={styles.ul}>
                    <li style={styles.li}><Link style={styles.link} to="/">Stats</Link>({player.rank})</li>
                    <li style={styles.li}><Link style={styles.link} to="/">Notes</Link></li>
                    <li style={styles.li}><Link style={styles.link} to="/">Friends</Link></li>
                    <li style={styles.li}><Link style={styles.link} to="/">Search</Link></li>
                    <li style={styles.li}><Link style={styles.link} to="/">Settings</Link></li>
                    <li style={styles.li}><Link style={styles.link} to="/">Support</Link></li>
                    <li style={styles.li}><Link style={styles.link} to="/">Logout</Link></li>
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