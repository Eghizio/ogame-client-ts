import React from 'react';

export interface ShipyardProps{

}

const Shipyard: React.FC<ShipyardProps> = (props) => {
    return(
        <main>
            <h1 style={{color:"white"}}>Shipyard</h1>
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
    
export default Shipyard;