import React from 'react';

export interface AllianceProps{

}

const Alliance: React.FC<AllianceProps> = (props) => {
    return(
        <main>
            <h1 style={{color:"white"}}>Alliance</h1>
            <div style={css.content}></div>
        </main>
    );
};

const css = {
    content: {
        width: "95%",
        height: "50vh",
        background: "lightgray"
    }
};

export default Alliance;