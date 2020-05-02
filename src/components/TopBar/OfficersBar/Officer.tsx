import React from "react";

export interface OfficerProps {
    name: string
}

const Officer: React.FC<OfficerProps> = ({name}) => {
    return (
        <div style={{width: "30px", height: "30px", border: "1px solid aquamarine", margin: "1px"}}>
            {name ? name.substring(0,2) : null}
        </div>
    );
};

export default Officer;