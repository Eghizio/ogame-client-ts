import React from 'react';

export interface ShopProps{

}

const Shop: React.FC<ShopProps> = (props) => {
    return(
        <main>
            <h1 style={{color:"white"}}>Shop</h1>
            <div style={css.content}></div>
        </main>
    );
};

const css = {
    content: {
        width: "95%",
        height: "50vh",
        background: "lightgray"
    }
};

export default Shop;