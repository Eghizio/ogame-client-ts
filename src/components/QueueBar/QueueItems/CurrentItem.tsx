import React, { useContext } from 'react';
// import './CurrentItem.css';
import { GlobalContext } from '../../../providers/GlobalProvider';
import Sprite from '../../Sprite';
import Emoji from '../../Emoji';

import { QueueItem } from "./QueueItems"; //temp

export interface CurrentItemProps{
    item: QueueItem
}

// ❌✖️
const CurrentItem: React.FC<CurrentItemProps> = ({item}) => {
    const context = useContext(GlobalContext);
    
    const parseTime = (timestamp: number): string => { //temp, change it into hook in decoupled component to timer down
        // const counter = new Date(Date.now()+timestamp).getTime() // - Date.now()
        // change useTimeTill to return numbers, EventTimer own parsing.
        // console.log(counter, timestamp)

        let d, h, m, s; //need to add weeks. maybe use moment.js ?
        
        s = Math.floor(timestamp / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;

        const parsedTime = Object.entries({d, h, m, s}).reduce((acc, t) => acc + (t[1] ? `${t[1]+t[0]}. ` : ""), "");

        console.log(parsedTime)
        return parsedTime;
    };

    const cancelItem = () => {
        //confirmation modal etc.
        const confirmation = window.confirm(`Cancel upgrade of ${item.name} to level ${item.nextLevel}?`);
        if(confirmation) console.log("Dispatch delete ", item);
    };

    if(!context) return null;
    const buildingsCDN = context.cdn.buildings;
    const MetalMineSprite = buildingsCDN.get("1");

    return (
        <div style={styles.currentContainer}>
            <h4 style={styles.header}>{item.name}</h4>
            <div style={styles.current}>
                <Sprite src={MetalMineSprite!.src} width="50px" height="50px" style={styles.currentSprite}>
                    <div style={styles.currentCancel} onClick={cancelItem}>
                        <Emoji symbol="✖️" label="cancel cross"/>
                    </div>
                </Sprite>
                <div style={styles.curentInfo}>
                    <div style={styles.infoLevel}>
                        Upgrade to level: <span style={styles.highlight}>{item.nextLevel}</span>
                    </div>
                    <div style={styles.infoTime}>
                        Build time: <br/>
                        <span style={styles.highlight}>{parseTime(item.buildTime)}</span>
                    </div>
                </div>
            </div>
            <div style={styles.boost}>
                Finish instantly!
            </div>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    currentContainer: {
        marginBottom: "5px"
    },
    header: {
        margin: "0px"
    },
    current: {
        display: "flex",
        alignItems: "center",
        padding: "3px"
    },
    currentSprite: {
        display: "flex",
        alignItems: "flex-end",
        borderRadius: "3px",
        border: "1px solid #fff", // on hover border: "1px solid gold",
        margin: "5px",
        backgroundSize: "2000%"
    },
    currentCancel: { //need custom X for that
        width: "30%",
        height: "30%",
        fontSize: "10px",
        backgroundColor: "red",
        borderRadius: "3px",
        margin: "1px",
        cursor: "pointer"
    },
    curentInfo: {
        fontSize: "small",
        textAlign: "left" as const
    },
    infoLevel: {
        whiteSpace: "nowrap" as const
    },
    infoTime: {
        textAlign: "center" as const
    },
    highlight: {
        fontWeight: "bold" as const,
        color: "gold"
    },
    boost: {
        backgroundColor: "#444",
        border: "1px solid #000",
        borderRadius: "3px"
    }
};

export default CurrentItem;