import React from 'react';
import Tooltip from '../Tooltip';
import { Link } from 'react-router-dom';
// import './Footer.css';

export interface FooterProps{

}

// https://css-tricks.com/couple-takes-sticky-footer/ 
// 2 last approaches seems nice

// opens modal with patch notes
const Footer: React.FC<FooterProps> = (props) => {
    return (
        <footer style={styles.footer}>
            <span>
                <Tooltip position="top" name="Patch notes">version</Tooltip>
                <Link to="/" style={styles.link}>&copy; legal gameforge</Link>
            </span>
            <span>
                <Link to="/" style={styles.link}>Help</Link>
                |
                <Link to="/" style={styles.link}>Board</Link>
                |
                <span style={styles.rules}>Game rules</span> {/* opens modal with rules */}
                |
                <Link to="/" style={styles.link}>Help</Link>
            </span>
        </footer>
    );
};

// eslint-disable-next-line
const styles = {
    footer: {
        marginTop: "100px",
        width: "80%",
        padding: "3px 10%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",

        //temp
        backgroundColor: "#111"
    },
    link: {
        textDecoration: "none",
        color: "inherit",
        padding: "0 10px"
    },
    rules: {
        padding: "0 10px"
    }
};

export default Footer;