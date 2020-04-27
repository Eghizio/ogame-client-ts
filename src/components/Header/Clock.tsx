import React, { useState, useEffect } from "react";

export interface ClockProps{
    style?: React.CSSProperties
}

const Clock: React.FC<ClockProps> = ({style}) => {
    const [time, setTime] = useState<string>("");
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();

            const day = date.getDate().toString().padStart(2, "0");
            const month = (1+date.getMonth()).toString().padStart(2, "0");
            const year = date.getFullYear().toString().padStart(2, "0");

            const hours = date.getHours().toString().padStart(2, "0");
            const minutes = date.getMinutes().toString().padStart(2, "0");
            const seconds = date.getSeconds().toString().padStart(2, "0");

            setTime(`${day}.${month}.${year}\t${hours}:${minutes}:${seconds}`);
        },1000);
        
        return () => clearInterval(interval);
    });

    return (
        <span style={style}>{time}</span>
    );
};

// eslint-disable-next-line
const styles = {

};

export default Clock;