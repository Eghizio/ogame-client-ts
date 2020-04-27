import React from "react";
import { Link } from "react-router-dom";
import Emoji from "../Emoji";

export interface AltProps{
    children: string;
    href: string;
};

const Alt: React.FC<AltProps> = ({ href, children:emoji}) => {
    return(
        <div style={css.div}>
            <Link style={css.link} to={href}>
                <Emoji label="Alt">{emoji!==""? emoji:"ℹ️"}</Emoji>
            </Link>
        </div>
    );
};

const css = {
    div: {
        width: "30px",
        height: "30px",
        margin: "0 10px",
        backgroundColor: "#7695aa",
        textAlign: 'center' as const,
        verticalAlign: "middle",
        lineHeight: "30px"
    },
    link: {
        textDecoration: "none",
        color: "white"
    }
};

export default Alt;