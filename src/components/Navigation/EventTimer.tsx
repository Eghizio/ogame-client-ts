import React, { useState, useEffect } from 'react';

export interface EventTimerProps{
    gameEvent: {
        name: string;
        endsAt: Date;
    }
};

//might add breathing opacity when time remaining low
const EventTimer: React.FC<EventTimerProps> = ({gameEvent: {name, endsAt}}) => {
    const [timeRemaining, setTime] = useState<string>("");

    useEffect(() => {

        const parseTime = () => {
            let parsedTime: string = timeRemaining;

            let time: number = endsAt.getTime() - Date.now();

            const days:     number = Math.floor( time/ (1000 * 60 * 60 * 24) );
            time -= days*(1000 * 60 * 60 * 24);
            const hours:    number = Math.floor( time/ (1000 * 60 * 60) );
            time -= hours*(1000 * 60 * 60);
            const minutes:  number = Math.ceil( time/ (1000 * 60) );

            parsedTime = `${days}d ${hours}h ${minutes}min.`;

            setTime(parsedTime);
        };
        parseTime();
        const timer = setInterval(parseTime, 60000);

        return () => clearInterval(timer);
    });

    return(
        <div style={styles.div}>
            <span style={styles.time}>{timeRemaining}</span>
            <span style={styles.name}>{name}</span>
        </div>
    );
};

const styles = {
    div: {
        display: "inline-block",
        width: "150px",
        height: "60px",
        textAlign: "center" as const,
        border: "1px solid gold",
        borderRadius: "5px",
        marginLeft: "-10px"
    },
    name: {
        display: "inline-block",
        fontSize: "15px"
    },
    time: {
        color: "gold",
        fontSize: "21px",
        fontWeight: "bold" as const
    }
};

export default EventTimer;