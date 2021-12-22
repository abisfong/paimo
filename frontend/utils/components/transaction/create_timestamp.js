import timesBetweenDates from "../../time_between_dates";

export default function createTimestamp(date1, date2) {
  const {
    secondsElapsed,
    minutesElapsed,
    hoursElapsed,
    daysElapsed
  } = timesBetweenDates(date1, date2);

  if (secondsElapsed < 60)
    return (secondsElapsed === 0 ? 1 : secondsElapsed) + 's';
  if (minutesElapsed < 60 && minutesElapsed > 0)
    return minutesElapsed + 'm';
  if (hoursElapsed < 24 && hoursElapsed > 0)
    return hoursElapsed + 'h';
  if (daysElapsed <= 15 && daysElapsed > 0)
    return daysElapsed + 'd';
  return date2.toLocaleString('default', { month: 'short' }) + ' ' + date2.getDay();
}