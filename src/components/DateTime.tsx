import DateTimePretty from "./DateTimePretty"

export interface DateTimeProps {
  date: string,
}

export const DateTime = ({ date }: DateTimeProps) => {
  return (
    <div>
      <p className="date">{date}</p>
    </div>
  )
}

const Pretty = DateTimePretty(DateTime);
export default Pretty;
