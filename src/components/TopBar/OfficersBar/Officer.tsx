import React, { useContext } from "react";
import { GlobalContext } from "../../../providers/GlobalProvider";
import Sprite from "../../Sprite";
import Global from "../../../types/global";
import Tooltip from "../../Tooltip";

export interface OfficerProps {
    name: Global.Officer
}

const Officer: React.FC<OfficerProps> = ({name}) => {
    const context = useContext(GlobalContext);

    if(!context) return null;

    const officerCDN = context.cdn.officers[name.toLowerCase()];

    return (
        <Tooltip position="bottom">
            {officerCDN && <Sprite src={officerCDN.src} {...officerCDN} style={styles.officer}/>}
        </Tooltip>
    );
};

const styles = {
    officer: {
        margin: "0 5px"
    }
};

export default Officer;