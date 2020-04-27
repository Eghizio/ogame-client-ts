import React from 'react';
import Primary, { PrimaryProps } from "./Primary";
import Alt, { AltProps } from "./Alt";

export type ItemData = {
    primary: PrimaryProps;
    alt: AltProps;
};

export interface ItemProps{
    item: ItemData;
};

const Item: React.FC<ItemProps> = ({item:{primary, alt}}) => {
    return(
        <li style={css.li}>
            <Primary href={primary.href}>{primary.children}</Primary>
            <Alt href={alt.href}>{alt.children}</Alt>
        </li>
    );
};

const css = {
    li: {
        display: "inline-flex",
        margin: "5px",
        height: "30px",
        backgroundColor: "none"
    }
};

export default Item;