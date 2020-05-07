import { useState, useEffect } from "react";

const useCountdown = (miliseconds: number) => {
    const [timeLeft, setTimeLeft] = useState<number>(miliseconds);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1000);
        }, 1000);

        return () => { clearInterval(interval); };
    }, [miliseconds]);

    return timeLeft;
};

export default useCountdown;