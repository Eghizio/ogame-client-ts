import React, { useContext } from "react"
import Global from "../../../types/global";
import getProperty from "../../../utils/getProperty";
import { GlobalContext } from "../../../providers/GlobalProvider";
import Sprite from "../../Sprite";
import Tooltip from "../../Tooltip";

export interface PlayerClassProps {
    name: Global.PlayerClass
}

const PlayerClass: React.FC<PlayerClassProps> = ({name}) => {
    const context = useContext(GlobalContext);

    if(!context) return null;

    const classCDN = getProperty(context.cdn.classes, name.toLowerCase());

    return (
        <Tooltip position="bottom">
            {classCDN && <Sprite src={classCDN.src} {...classCDN} style={styles.playerClass}/>}
        </Tooltip>
    );
};

const styles = {
    playerClass: {
        backgroundSize: "cover",
        margin: "0 5px"
    }
};

export default PlayerClass;