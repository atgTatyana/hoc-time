import React from "react";
import { DateTimeProps } from "./DateTime";

const nowDate = new Date().getTime();

function DateTimePretty(Component: React.FC<DateTimeProps>) {
  const newComponent = (props: DateTimeProps) => {
    let { date } = props;
    const videoDate = new Date(date).getTime();
    const minutesAgo = (nowDate - videoDate)/60000;
    
    switch(true) {
      case minutesAgo < 60:
        date = `${(minutesAgo).toFixed()} минут назад`;
        break;
      case minutesAgo < 1440:
        date = `${(minutesAgo/60).toFixed()} часов назад`;
        break;
      default:
        date = `${(minutesAgo/1440).toFixed()} дней назад`;
        break;
    }

    return (
      <Component date={date} /> 
    )
  }
  return newComponent;
}

export default DateTimePretty;