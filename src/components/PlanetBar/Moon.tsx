import React from 'react';

interface MoonProps{
    name: string
    id: number
}

const Moon: React.FC<MoonProps> = (props) => {
    return(
        <div style={styles.moon}></div>
    );
};

// eslint-disable-next-line
const styles = {
    moon: {
        width: "40px",
        height: "40px",
        backgroundColor: "gray",
        borderRadius: "50%"
    }
};


export default Moon;