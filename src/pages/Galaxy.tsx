import React from 'react';

export interface GalaxyProps{

}

const Galaxy: React.FC<GalaxyProps> = (props) => {
    return(
        <main>
            <h1 style={{color:"white"}}>Galaxy</h1>
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
    
export default Galaxy;