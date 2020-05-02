import React from 'react';
import Logo from "./Logo";
import Resources from "./ResourcesBar";
import Officers from "./Officers";

export interface TopBarProps{

}

const TopBar: React.FC<TopBarProps> = (props) => {
    return (
        <div style={styles.container}>
            <Logo/>
            <Resources/>
            <Officers/>
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