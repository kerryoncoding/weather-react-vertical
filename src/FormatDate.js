import React from "react";

export default function FormatDate(props) {
    let day = props.date.getDay();

    let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ];
    let dayOfWeek = (days[day]);

    //time minutes
    let timeMinutes = props.date.getMinutes();
    if (timeMinutes < 10) {
        timeMinutes = `0${timeMinutes}`;
    }

    //time of day converted to 12-Hour with AM/PM
    let timeHour = props.date.getHours();

    if (timeHour === 12) {
        return `${dayOfWeek} ${timeHour}:${timeMinutes} PM`;
    } else { if (timeHour === 0) {
        return `${dayOfWeek} 12:${timeMinutes} AM`;
        } else {
        if (timeHour > 12) { 
        timeHour = timeHour - 12;
        return `${dayOfWeek} ${timeHour}:${timeMinutes} PM`;
        } else {
            return `${dayOfWeek} ${timeHour}:${timeMinutes} AM`;
        }
        }
    }
}