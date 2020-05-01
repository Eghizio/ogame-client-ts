import React from 'react';
import { Event } from "../../types/global";
import useTimeTill from '../../hooks/useTimeTill';


// when time remaining low => add className with breathing opacity animation
const EventTimer: React.FC<Event> = ({name, expires}) => {
    const { days, hours, minutes, seconds } = useTimeTill(expires);

    return(
        <div style={styles.div}>
            <span style={styles.label}>Event ends in:</span>
            <span style={styles.time}>
                {days !== "00" ? `${days}d ` : null}
                {hours !== "00" ? `${hours}h ` : null}
                {minutes !== "00" ? `${minutes}m ` : null}
                {seconds !== "00" ? ` ${seconds}s` : null}
            </span>
            <span style={styles.name}>{name}</span>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    div: {
        display: "inline-block",
        width: "150px",
        height: "80px",
        textAlign: "center" as const,
        border: "1px solid gold",
        borderRadius: "5px",
        marginLeft: "-10px"
    },
    label: {
        display: "inline-block"
    },
    time: {
        display: "inline-block",
        color: "gold",
        fontSize: "16px",
        fontWeight: "bold" as const
    },
    name: {
        display: "inline-block",
        padding: "0 5px",
        marginTop: "10px"
    }
};

export default EventTimer;