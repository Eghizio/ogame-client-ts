import React from 'react';

export interface OverviewProps{

}

const Overview: React.FC<OverviewProps> = (props) => {
    return(
        <main style={css.main}>
            <h1 style={{color:"white"}}>Overview</h1>
            <div style={css.content}></div>
        </main>
    );
};

const css = {
    main: {
        
    },
    content: {
        width: "95%",
        height: "50vh",
        background: "lightgray"
    }
};

export default Overview;