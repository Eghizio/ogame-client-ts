import React from 'react';

export interface ResearchProps{

}

const Research: React.FC<ResearchProps> = (props) => {
    return(
        <main>
            <h1 style={{color:"white"}}>Research</h1>
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
    
export default Research;