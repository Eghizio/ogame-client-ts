export interface Time{
    years: number
    weeks: number
    days: number
    hours: number
    minutes: number
    seconds: number
}

const parseTime = (miliseconds: number): Time => {
    
    const fullSeconds = Math.floor(miliseconds / 1000);
    const fullMinutes = Math.floor(fullSeconds / 60);
    const fullHours = Math.floor(fullMinutes / 60);
    const fullDays = Math.floor(fullHours / 24);

    const weeks = Math.floor(fullDays / 7);
    const years = Math.floor(weeks / 52);

    const days = fullDays % 7;
    const hours = fullHours % 24;
    const minutes = fullMinutes % 60;
    const seconds = fullSeconds % 60;
    
    const parsedTime: Time = {
        years: years,
        weeks: weeks,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };

    return parsedTime;
};

export default parseTime;