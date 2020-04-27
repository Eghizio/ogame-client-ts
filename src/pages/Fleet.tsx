import React from 'react';

export interface FleetProps{

}

const Fleet: React.FC<FleetProps> = (props) => {
    return(
        <main>
            <h1 style={{color:"white"}}>Fleet</h1>  
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
    
export default Fleet;