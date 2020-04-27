import React from 'react';

export interface TraderProps{

}

const Trader: React.FC<TraderProps> = (props) => {
    return(
        <main>
            <h1 style={{color:"white"}}>Trader</h1>
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

export default Trader;