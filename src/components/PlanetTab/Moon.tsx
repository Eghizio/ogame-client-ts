import React from 'react';

interface MoonProps{
    data: {name:string, id:number};
}

const Moon: React.FC<MoonProps> = (props) => {
    return(
        <div style={css.moon}>

        </div>
    );
};

const css = {
    moon: {
        width: "40px",
        height: "40px",
        backgroundColor: "gray",
        borderRadius: "50%"
    }
};


export default Moon;