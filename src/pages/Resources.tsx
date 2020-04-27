import React from 'react';

export interface ResourcesProps{

}

const Resources: React.FC<ResourcesProps> = (props) => {
    return(
        <main>
            <h1 style={{color:"white"}}>Resources</h1>
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
    
export default Resources;