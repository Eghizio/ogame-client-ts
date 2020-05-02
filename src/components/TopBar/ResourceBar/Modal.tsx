import React, { useState, useEffect } from "react";


export type resource = "Metal" | "Crystal" | "Deuterium" | "Antimatter" | "Energy";
export interface ResourceProps {
    id?: string
    resourceType: resource
    amount: number
    storage: number
    production: number
    shelter: number
}


//make modal a standalone component with configurable display(side:left/right/above/below)
// Edit: This will be just replaced by a Tooltip component
const Modal: React.FC<{parentRef:any, res:ResourceProps}> = ({parentRef, res}) => {
    const useSize = () => {
        const [size, setSize] = useState<{width:number,height:number}>({width:50,height:30});
        useEffect(() => {
            let width = parentRef.current.style.width.slice(0,parentRef.current.style.width.length-2)
            let height = parentRef.current.style.height.slice(0,parentRef.current.style.height.length-2)
            setSize({width: Number(width), height: Number(height)});
        },[]);

        return size;
    };
    const size = useSize();
    
    return (
        <div style={{position: "relative", width: `${size.width*3}px`, left: -size.width, padding: "3px", backgroundColor: "#222", border: "2px solid #aaa", borderRadius: "5px"}}>
            <span>{res.resourceType}</span><br/>
            <span>{"Amount: " + res.amount}</span><br/>
            <span>{"Storage: " + res.storage}</span><br/>
            <span>{"Production: " + res.production}</span><br/>
            <span>{"Protected: " + res.shelter}</span>
        </div>
    );
};

export default Modal;