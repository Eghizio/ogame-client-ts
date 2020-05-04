import React from 'react';

export interface EmojiProps extends React.HTMLAttributes<HTMLSpanElement>{
    symbol: string
    label?: string
    style?: React.CSSProperties
}

const Emoji: React.FC<EmojiProps> = ({symbol, label, style}) => 
    <span role="img" aria-label={`${label} emoji`} style={style}> 
        {symbol}
    </span>

export default Emoji;