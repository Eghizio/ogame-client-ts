import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export interface PrimaryProps{
    children: string;
    href: string;
};

const Primary: React.FC<PrimaryProps> = ({children, href}) => {
    return(
        <div style={css.div} onClick={() => <Redirect to={href}/>}>
            <Link style={css.link} to={href}>{children}</Link>
        </div>
    );
};

const css = {
    div: {
        width: "110px",
        height: "30px",
        backgroundColor: "#7695aa",
        textAlign: 'center' as const,
        verticalAlign: "middle",
        lineHeight: "30px"
    },
    link: {
        textDecoration: "none",
        color: "white" //"#61dafb"
    }
};

export default Primary;