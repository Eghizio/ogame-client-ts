import React from 'react';

export interface EmojiProps{
    symbol: string
    label?: string;
}

const Emoji: React.FC<EmojiProps> = ({symbol, label}) => 
    <span role="img" aria-label={`${label} emoji`}> 
        {symbol}
    </span>

export default Emoji;