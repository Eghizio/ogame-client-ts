import React from 'react';

export interface EmojiProps{
    children: string;
    label?: string;
}

const Emoji: React.FC<EmojiProps> = ({children:emoji, label}) => 
    <span role="img" aria-label={label||"Emoji"}> 
        {emoji} 
    </span>

export default Emoji;