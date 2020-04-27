import React, { useState, useRef, useEffect } from 'react';

export interface ResourcesBarProps {

}

export type resource = "Metal" | "Crystal" | "Deuterium" | "Antimatter" | "Energy";
export interface ResourceProps {
    id?: string
    resourceType: resource
    amount: number
    storage: number
    production: number
    shelter: number
}

const sampleProps: ResourceProps[] = [
    { resourceType: "Metal", amount: 10000, storage: 75000, production: 2137, shelter: 1200 },
    { resourceType: "Crystal", amount: 10000, storage: 75000, production: 2137, shelter: 1200 },
    { resourceType: "Deuterium", amount: 10000, storage: 75000, production: 2137, shelter: 1200 },
    { resourceType: "Antimatter", amount: 10000, storage: 75000, production: 2137, shelter: 1200 },
    { resourceType: "Energy", amount: 10000, storage: 75000, production: 2137, shelter: 1200 },
];

const ResourcesBar: React.FC<ResourcesBarProps> = (props) => {

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

        //make modal a standalone component with configurable display(side:left/right/above/below)
        const Modal = ({parentRef, res}:{parentRef:any, res:ResourceProps}) => {
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
                <div style={{display: showModal? "inline-block":"none", position: "relative", width: `${size.width*3}px`, left: -size.width, padding: "3px", backgroundColor: "#222", border: "2px solid #aaa", borderRadius: "5px"}}>
                    <span>{res.resourceType}</span><br/>
                    <span>{"Amount: " + res.amount}</span><br/>
                    <span>{"Storage: " + res.storage}</span><br/>
                    <span>{"Production: " + res.production}</span><br/>
                    <span>{"Protected: " + res.shelter}</span>
                </div>
            );
        };

        return (
            <div style={{width: "50px", height: "30px", margin: "10px", textAlign: "center",border: "1px solid red"}}  ref={resourceRef} onMouseOver={() => displayModal(true)} onMouseLeave={() => displayModal(false)}>
                <img src={img} alt={res.resourceType} style={{width: "50px", height: "30px"}}/>
                <span>{res.amount}</span>
                <Modal parentRef={resourceRef} res={res}/>
            </div>
        );
    };

    return (
        <div style={{display: "flex"}}>
            {["Metal", "Crystal", "Deuterium", "Antimatter", "Energy"].map((r,i) => <Resource {...sampleProps[i]} key={i} />)

            }
        </div>
    );
};

// const styles = {

// };

export default ResourcesBar;