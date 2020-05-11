import React from 'react';
// import './TechnologyGridItem.css';
import Global from '../../../types/global';
import Sprite from '../../Sprite';
import Tooltip from '../../Tooltip';
import UpgradeButton from "./UpgradeButton";
import LevelBar from './LevelBar';
import ItemOverlay from './ItemOverlay';

export interface TechnologyGridItemProps{
    item: {
        uuid: string
        name: string
        currentLevel: number
        sprite: Global.Sprite
        meetsRequirements: boolean
        enoughResources: boolean
    }
}

// need to fix styling and maybe decouple, take care of tech requirements,
// Item Tooltip and UpgradeButton tooltip displays and overlaps, need to display only one
const TechnologyGridItem: React.FC<TechnologyGridItemProps> = ({item}) => {
    const { name, currentLevel, sprite, meetsRequirements, enoughResources } = item;


    const upgrade = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log(`${name} dispatched UPDATE to level ${currentLevel+1}`)
    };

    return (
        <div className="technology-grid-item" style={styles.item}>
            <Tooltip position="top" name={name} content={!meetsRequirements ? "Requirements not met!" : enoughResources ? "" : "Not enough resources!"} style={styles.tooltip}>
                    <Sprite {...sprite} width="100px" height="100px" style={{...styles.sprite, ...(!meetsRequirements && { filter: "grayscale(1)"})}}>
                        <ItemOverlay meetsRequirements={meetsRequirements} enoughResources={enoughResources}>
                            {meetsRequirements && enoughResources && 
                                <UpgradeButton name={name} currentLevel={currentLevel} upgrade={upgrade}/>
                            }
                            <LevelBar level={currentLevel} style={styles.levelBar}/>
                        </ItemOverlay>
                    </Sprite>
            </Tooltip>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    item: {
        // boxSizing: "border-box" as const,
        margin: "2px",
        borderRadius: "5px",
        // border: "1px solid black", //extends the height in items with overlays for some reason
    },
    tooltip: {
        // need to make content inline, maybe custom tooltip?
        whiteSpace: "nowrap" as const
    },
    sprite: {
        position: "relative" as const,
        width: "100px",
        height: "100px",
        borderRadius: "5px",
        border: "1px solid black",
    },
    levelBar: {
        position: "absolute" as const,
        right: "0",
        bottom: "0"
    }
};

export default TechnologyGridItem;