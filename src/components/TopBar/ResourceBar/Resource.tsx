import React, { useState, useRef, useContext } from 'react';
import { GlobalContext } from '../../../providers/GlobalProvider';
import Global from "../../../types/global";
import Sprite from "../../Sprite";
import Modal from "./Modal";
import getProperty from '../../../utils/getProperty';


// Might be replaced by Sprite component composed with Tooltip
const Resource: React.FC<Global.Resource> = (resource) => {
    const context = useContext(GlobalContext);


    const [showModal, displayModal] = useState<boolean>(false);
    // const useResourceImage = (name: Global.Resource["name"]): string => {
    //     switch(name){
    //         case "Metal":
    //             return "https://vignette.wikia.nocookie.net/ogame/images/b/ba/Metal.PNG/revision/latest?cb=20130914121311";
    //         case "Crystal":
    //             return "https://vignette.wikia.nocookie.net/ogame/images/8/88/Crystal.PNG/revision/latest?cb=20130914121323";
    //         case "Deuterium":
    //             return "https://vignette.wikia.nocookie.net/ogame/images/a/a7/Deutrium.PNG/revision/latest?cb=20130914121332";
    //         case "Antimatter":
    //             return "https://vignette.wikia.nocookie.net/ogame/images/c/c7/Dark_matter.png/revision/latest?cb=20090914165839";
    //         case "Energy":
    //             return "https://cdn.vox-cdn.com/thumbor/1ZPuV80n_PVUARYlkcCorFG_Frk=/0x0:3000x3000/1200x800/filters:focal(1260x1260:1740x1740)/cdn.vox-cdn.com/uploads/chorus_image/image/50911339/electricity.0.jpg";
    //         default:
    //             return "";
    //     }
    // };
    // const img = useResourceImage(resource.name);
    let resourceRef:any = useRef<any>();
    
    
    if(!context) return null;


    const resourceCDN = getProperty(context.cdn.resources, resource!.name.toLowerCase());
    console.log(resourceCDN)

    return (
        <div 
        style={styles.resource}  
        ref={resourceRef} 
        onMouseOver={() => displayModal(true)} 
        onMouseLeave={() => displayModal(false)}
        >
            {/* <img src={img} alt={resource.name} style={{width: "50px", height: "30px"}}/> */}
            {resourceCDN && <Sprite src={resourceCDN.src} {...resourceCDN} />}
            <span>{resource.amount}</span>
            {showModal && <Modal parentRef={resourceRef} resource={resource}/>}
        </div>
    );
};

const styles = {
    resource: {
        width: "50px",
        height: "30px",
        margin: "10px",
        textAlign: "center" as const,
        // border: "1px solid red"
    }
};

export default Resource;