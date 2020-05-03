import React, { useContext } from "react";
import { GlobalContext } from "../../../providers/GlobalProvider";
import Global from "../../../types/global";
import Sprite from "../../Sprite";
import Tooltip from "../../Tooltip";
import OfficerTooltip from "./OfficerTooltip";
import { Link } from "react-router-dom";

export interface OfficerProps {
    name: Global.Officer
}

const Officer: React.FC<OfficerProps> = ({name}) => {
    const context = useContext(GlobalContext);

    if(!context) return null;

    const officerCDN = context.cdn.officers[name.toLowerCase()];

    return (
        <Link style={styles.link} to="/shop">
            <Tooltip position="bottom" tooltip={<OfficerTooltip name={name} />}>
                {officerCDN && <Sprite src={officerCDN.src} {...officerCDN} style={styles.officer}/>}
            </Tooltip>
        </Link>
    );
};

const styles = {
    link: {
        textDecoration: "none",
        color: "inherit"
    },
    officer: {
        margin: "0 5px"
    }
};

export default Officer;