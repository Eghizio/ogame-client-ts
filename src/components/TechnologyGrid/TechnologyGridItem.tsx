import React from 'react';
// import './TechnologyGridItem.css';
import Global from '../../types/global';
import Sprite from '../Sprite';
import Tooltip from '../Tooltip';

export interface TechnologyGridItemProps{
    uuid: string
    name: string
    currentLevel: number
    sprite: Global.Sprite
}

// need to fix styling and maybe decouple, take care of tech requirements,
const TechnologyGridItem: React.FC<TechnologyGridItemProps> = ({name, currentLevel, sprite}) => {
    const passedRequirements: boolean = Math.random() > 0.85 ? false : true;
    const enoughResources: boolean = Math.random() > 0.5 ? true : false;

    const upgrade = () => {
        console.log(`${name} dispatched UPDATE to level ${currentLevel+1}`)
    };

    return (
        <div style={styles.item}>
            {/* {!enoughResources && <Tooltip position="top" name={name} content={enoughResources ? "" : "Not enough resources!"} style={styles.tooltip}>} */}
                <Sprite {...sprite} width="100px" height="100px" style={styles.sprite}>
                    {passedRequirements
                    ?   <div style={{...(!enoughResources && styles.orangeOverlay)}}> {/* opacity applies on children */}
                            {enoughResources && 
                                <Tooltip position="top">
                                    <div style={styles.upgrade} onClick={upgrade}/>
                                </Tooltip>
                            }
                            <div style={styles.levelBar}>
                                {currentLevel} {/*currentAmount in case of fleet and def*/}
                            </div>
                        </div>
                    :   <div style={styles.inactiveOverlay}>
                            <div style={styles.levelBar}>
                                {currentLevel}
                            </div>
                        </div>
                    }
                </Sprite>
            {/* </Tooltip> */}
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    item: {
        padding: "5px"
    },
    tooltip: {
        // need to make content inline, maybe custom tooltip?
    },
    sprite: {
        width: "100px",
        height: "100px",
        borderRadius: "5px"
    },
    content: {
        width: "100%",
        height: "100%"
    },
    orangeOverlay: { // need to style it
        width: "100%",
        height: "100%",
        // backgroundColor: "rgba(255, 165, 0, 0.4)", rgba(255, 165, 0, 0.1) fix the gradients to more stripes
        backgroundImage: "linear-gradient(135deg, rgba(255, 165, 0, 0.4) 25%, rgba(255, 165, 0, 0.1) 25%, rgba(255, 165, 0, 0.1) 50%,rgba(255, 165, 0, 0.4) 50%, rgba(255, 165, 0, 0.4) 75%, rgba(255, 165, 0, 0.1) 75%, rgba(255, 165, 0, 0.1) 100%)",
        backgroundRepeat: "infinite",
        display: "flex",
        flexDirection: "column" as const,
        justifyContent: "space-between"
    },
    inactiveOverlay: {
        width: "100%",
        height: "100%",
        backgroundColor: "gray",
        opacity: "0.4"
    },
    upgrade: {
        alignSelf: "flex-start",
        width: "25px",
        height: "15px",
        backgroundColor: "lightgreen",
        borderRadius: "5px 0px"
    },
    levelBar: {
        alignSelf: "flex-end",
        paddingLeft: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        width: "90%",
        height: "20px",
        backgroundColor: "#333",
        borderRadius: "9px 0px 5px"
    }
};

export default TechnologyGridItem;