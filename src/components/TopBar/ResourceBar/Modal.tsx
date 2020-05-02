import React, { useState, useEffect } from "react";
import Global from "../../../types/global";

export interface ModalProps{
    parentRef: any
    resource: Global.Resource
}

//make modal a standalone component with configurable display(side:left/right/above/below)
// Edit: This will be just replaced by a Tooltip component
const Modal: React.FC<ModalProps> = ({parentRef, resource}) => {
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
    
    const calculatedStyle = {
        width: `${size.width*3}px`,
        left: -size.width
    };

    return (
        <div style={{...styles.modal, ...calculatedStyle}}>
            <span>{resource.name}</span><br/>
            <span>{"Amount: " + resource.amount}</span><br/>
            {/* {resource.storage && <span>{"Storage: " + resource.storage}</span>}<br/>
            {resource.production && <span>{"Production: " + resource.production}</span>}<br/>
            {resource.shelter && <span>{"Protected: " + resource.shelter}</span>} */}
        </div>
    );
};

const styles = {
    modal: {
        position: "relative" as const,
        padding: "3px",
        backgroundColor: "#222",
        border: "2px solid #aaa",
        borderRadius: "5px"
    }
};

export default Modal;