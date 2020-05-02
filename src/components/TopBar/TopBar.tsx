import React from 'react';
import Logo from "./Logo";
import ResourceBar from "./ResourceBar";
import OfficersBar from "./OfficersBar";

export interface TopBarProps{

}

const TopBar: React.FC<TopBarProps> = (props) => {
    return (
        <div style={styles.container}>
            <Logo/>
            <ResourceBar/>
            <OfficersBar/>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    container: {
        width: "100%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "space-between",
    }
};

export default TopBar;