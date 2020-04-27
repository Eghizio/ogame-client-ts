import React from 'react';

export interface StationProps{

}

const Station: React.FC<StationProps> = (props) => {
    return(
        <main>
            <h1 style={{color:"white"}}>Station</h1>       
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

export default Station;