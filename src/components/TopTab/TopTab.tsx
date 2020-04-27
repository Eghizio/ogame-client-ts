import React from 'react';
import Logo from "./Logo";
import Resources from "./ResourcesBar";
import Officers from "./Officers";

export interface TopTabProps{

}

const TopTab: React.FC<TopTabProps> = (props) => {
    return (
        <div style={styles.container}>
            <Logo/>
            <Resources/>
            <Officers/>
        </div>
    );
};

const styles = {
    container: {
        display: "flex"
    }
};

export default TopTab;