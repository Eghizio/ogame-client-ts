import React, { useState, useEffect } from "react";


export interface ClockProps{
    style?: React.CSSProperties
}

const Clock: React.FC<ClockProps> = ({style}) => {
    const [time, setTime] = useState<string>("03.05.2020 21:37:00");
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();

            const day = date.getDate().toString().padStart(2, "0");
            const month = (1+date.getMonth()).toString().padStart(2, "0");
            const year = date.getFullYear().toString().padStart(2, "0");

            const hours = date.getHours().toString().padStart(2, "0");
            const minutes = date.getMinutes().toString().padStart(2, "0");
            const seconds = date.getSeconds().toString().padStart(2, "0");

            setTime(`${day}.${month}.${year} ${hours}:${minutes}:${seconds}`);
        },1000);
        
        return () => clearInterval(interval);
    });

    return (
        <span style={style}>{time}</span>
    );
};


export default Clock;