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
        return(
            <div>
                 {dayOfWeek} {timeHour}:{timeMinutes} PM
            </div>
        );
    } else { if (timeHour === 0) {
        return (
            <div>
                {dayOfWeek} 12:{timeMinutes} AM
            </div>
        );
        } else {
        if (timeHour > 12) { 
        timeHour = timeHour - 12;
        return (
            <div>
                {dayOfWeek} {timeHour}:{timeMinutes} PM
            </div>
        ); 
        } else {
            return (
                <div>
                    {dayOfWeek} {timeHour}:{timeMinutes} AM
                </div>
            ); 
        }
        }
    }
}