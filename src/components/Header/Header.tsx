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
        <header style={css.header}>
            <span>Player: <Link style={css.link} to="/">{player.name}</Link></span>
            <span>
                <ul style={css.ul}>
                    <li style={css.li}><Link style={css.link} to="/">Stats</Link>({player.rank})</li>
                    <li style={css.li}><Link style={css.link} to="/">Notes</Link></li>
                    <li style={css.li}><Link style={css.link} to="/">Friends</Link></li>
                    <li style={css.li}><Link style={css.link} to="/">Search</Link></li>
                    <li style={css.li}><Link style={css.link} to="/">Settings</Link></li>
                    <li style={css.li}><Link style={css.link} to="/">Support</Link></li>
                    <li style={css.li}><Link style={css.link} to="/">Logout</Link></li>
                </ul>
            </span>
            {/* got to move it aside so the links will be centered */}
            <Clock/>
        </header>
    );
};

const css = {
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