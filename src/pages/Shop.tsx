import React from 'react';

export interface ShopProps{

}

const Shop: React.FC<ShopProps> = (props) => {
    return(
        <main>
            <h1 style={styles.header}>Shop</h1>
            <div style={styles.content}></div>
        </main>
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
        background: "lightgray"
    }
};

export default Shop;