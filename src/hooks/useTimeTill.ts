import { useState, useEffect } from "react";

export interface TimeTill{
    days: string
    hours: string
    minutes: string
    seconds: string
}

const useTimeTill = (endDate: Date): TimeTill => {
    const [timeTill, setTimeTill] = useState<TimeTill>({ days: "00", hours: "00", minutes: "00", seconds: "00" });

    useEffect(() => {
        const interval = setInterval(() => {

            // YOLO parsing, events don't last much longer than 2-7 days
            const relativeDate = new Date(endDate.getTime() - Date.now()).toISOString()

            const days = (Number(relativeDate.substr(8, 2))-1).toString();
            const [hours, minutes, seconds] = relativeDate.substr(11, 8).split(":");

            setTimeTill({
                days: days.padStart(2, "0"),
                hours: hours.padStart(2, "0"),
                minutes: minutes.padStart(2, "0"),
                seconds: seconds.padStart(2, "0")
            });
        }, 1000);

        return () => { clearInterval(interval) };
    }, [endDate]);

    return timeTill;
};

export default useTimeTill;