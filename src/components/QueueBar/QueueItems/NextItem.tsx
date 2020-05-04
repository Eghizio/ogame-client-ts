import React, { useContext } from 'react';
// import './NextItem.css';
import { GlobalContext } from '../../../providers/GlobalProvider';
import Tooltip from '../../Tooltip';
import Sprite from '../../Sprite';
import { QueueItem } from "./QueueItems"; //temp



export interface NextItemProps{
    item: QueueItem
}

const NextItem: React.FC<NextItemProps> = ({item}) => {
    const context = useContext(GlobalContext);

    if(!context) return null;
    const buildingsCDN = context.cdn.buildings;
    const MetalMineSprite = buildingsCDN.get("1");

    return (
        <Tooltip key={item.name+item.nextLevel} position="top" name={item.name}>
                <Sprite src={MetalMineSprite!.src} width="30px" height="30px" style={styles.small}/>
        </Tooltip>
    );
};

// eslint-disable-next-line
const styles = {
    small: {
        margin: "5px",
        border: "1px solid gold",
        borderRadius: "3px",
        backgroundSize: "2000%"
    }
};

export default NextItem;