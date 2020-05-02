import React from "react";

export interface OfficerProps {
    type: string
}

const Officer: React.FC<OfficerProps> = ({type}) => {
    return (
        <div style={{width: "30px", height: "30px", border: "1px solid aquamarine", margin: "1px"}}>
            {type ? type.substring(0,2) : null}
        </div>
    );
};

export default Officer;