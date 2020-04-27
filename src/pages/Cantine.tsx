import React from 'react';

export interface CantineProps{

}

const Cantine: React.FC<CantineProps> = (props) => {
    return(
        <main>
            <h1 style={{color:"white"}}>Cantine</h1>
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
    
export default Cantine;