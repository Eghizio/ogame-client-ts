import React, { useContext } from 'react';
import { GlobalContext } from '../../../providers/GlobalProvider';
import Global from "../../../types/global";
import Tooltip from "../../Tooltip";
import ResourceTooltip from "./ResourceTooltip";
import Sprite from "../../Sprite";


// Need to restyle tooltip cause it cant get wider
const Resource: React.FC<Global.Resource> = (resource) => {
    const context = useContext(GlobalContext);

    if(!context) return null;

    const resourceCDN = context.cdn.resources[resource.name.toLowerCase()];

    return (
        <Tooltip position="bottom" tooltip={<ResourceTooltip {...resource}/>}> {/*name={resource.name} content={`Available: ${resource.amount}`}>*/}
            <div style={styles.resource}>
                {resourceCDN && 
                    <Sprite src={resourceCDN.src} {...resourceCDN} />}
                <span>{resource.amount}</span>
            </div>
        </Tooltip>

    );
};

const styles = {
    resource: {
        width: "50px",
        height: "30px",
        margin: "10px",
        textAlign: "center" as const
    }
};

export default Resource;