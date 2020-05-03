import React, { useContext } from 'react';
import { GlobalContext } from "../providers/GlobalProvider"
import Sprite from '../components/Sprite';
import Global from '../types/global';

import Page from './Page';


export interface OverviewProps{

}

// Testing sprites
const Overview: React.FC<OverviewProps> = (props) => {
    const context = useContext(GlobalContext);

    //seems like my API mismatches spriting groups, need to map with caution, im considering restructuring api to match spriting groups
    const renderSprites = (cdnResource: Global.SpriteMap) => {
        const keys = Array.from(cdnResource.keys());
        const sprites = keys.map(key => cdnResource.get(key));
        
        return sprites.map((sprite, i) => sprite && <Sprite key={sprite.position} {...sprite} />);
    };
    
    return(
        <Page>
            <h1 style={styles.header}>Overview</h1>
            <div style={styles.content}>
                {context && renderSprites(context.cdn.buildings)}
                {context && renderSprites(context.cdn.research)}
                {context && renderSprites(context.cdn.ships)}
                {context && renderSprites(context.cdn.defense)}
            </div>
        </Page>
    );
};

// eslint-disable-next-line
const styles = {
    header: {
        color: "white"
    },
    content: {
        width: "95%",
        height: "50vh",
        background: "lightgray",
        // temp
        overflow: "auto"
    }
};

export default Overview;