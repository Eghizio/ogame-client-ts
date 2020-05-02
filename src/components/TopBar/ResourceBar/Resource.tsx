import React, { useState, useRef } from 'react';
import Modal from "./Modal";

export type resource = "Metal" | "Crystal" | "Deuterium" | "Antimatter" | "Energy";
export interface ResourceProps {
    id?: string
    resourceType: resource
    amount: number
    storage: number
    production: number
    shelter: number
}

// Might be replaced by Sprite component composed with Tooltip
const Resource: React.FC<ResourceProps> = ({ resourceType, amount, storage, production, shelter}) => {
    // eslint-disable-next-line
    const [res, setRes] = useState<ResourceProps>({resourceType:resourceType, amount:amount, storage:storage, production:production, shelter:shelter});
    const [showModal, displayModal] = useState<boolean>(false);
    const useResourceImage = (resourceType: resource): string => {
        switch(resourceType){
            case "Metal":
                return "https://vignette.wikia.nocookie.net/ogame/images/b/ba/Metal.PNG/revision/latest?cb=20130914121311";
            case "Crystal":
                return "https://vignette.wikia.nocookie.net/ogame/images/8/88/Crystal.PNG/revision/latest?cb=20130914121323";
            case "Deuterium":
                return "https://vignette.wikia.nocookie.net/ogame/images/a/a7/Deutrium.PNG/revision/latest?cb=20130914121332";
            case "Antimatter":
                return "https://vignette.wikia.nocookie.net/ogame/images/c/c7/Dark_matter.png/revision/latest?cb=20090914165839";
            case "Energy":
                return "https://cdn.vox-cdn.com/thumbor/1ZPuV80n_PVUARYlkcCorFG_Frk=/0x0:3000x3000/1200x800/filters:focal(1260x1260:1740x1740)/cdn.vox-cdn.com/uploads/chorus_image/image/50911339/electricity.0.jpg";
            default:
                return "";
        }
    };
    const img = useResourceImage(res.resourceType);
    let resourceRef:any = useRef<any>();

    return (
        <div style={{width: "50px", height: "30px", margin: "10px", textAlign: "center",border: "1px solid red"}}  ref={resourceRef} onMouseOver={() => displayModal(true)} onMouseLeave={() => displayModal(false)}>
            <img src={img} alt={res.resourceType} style={{width: "50px", height: "30px"}}/>
            <span>{res.amount}</span>
            {showModal && <Modal parentRef={resourceRef} res={res}/>}
        </div>
    );
};

export default Resource;