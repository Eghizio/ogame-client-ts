import React, { useContext } from "react"
import Global from "../../../types/global";
import getProperty from "../../../utils/getProperty";
import { GlobalContext } from "../../../providers/GlobalProvider";
import Sprite from "../../Sprite";
import Tooltip from "../../Tooltip";
import { Link } from "react-router-dom";

export interface PlayerClassProps {
    name: Global.PlayerClass
}

const PlayerClass: React.FC<PlayerClassProps> = ({name}) => {
    const context = useContext(GlobalContext);

    if(!context) return null;

    const classCDN = getProperty(context.cdn.classes, name.toLowerCase());

    return (
        <Link style={styles.link} to="/shop">
            <Tooltip position="bottom" name={name} content={`${name} is a powerful class!`} style={styles.tooltip}>
                {classCDN && <Sprite src={classCDN.src} {...classCDN} style={styles.playerClass}/>}
            </Tooltip>
        </Link>
    );
};

const styles = {
    link: {
        textDecoration: "none",
        color: "inherit"
    },
    tooltip: {
        width: "150px"
    },
    playerClass: {
        backgroundSize: "cover",
        margin: "0 5px"
    }
};

export default PlayerClass;