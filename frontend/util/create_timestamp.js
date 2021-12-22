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

function timesBetweenDates(date1, date2) {
  const diffInTime = date1.getTime() - date2.getTime();
  const oneSecond = 1000;
  const oneMinute = 1000 * 60;
  const oneHour = 1000 * 60 * 60;
  const oneDay = 1000 * 60 * 60 * 24;
  
  return {
    secondsElapsed: Math.round(diffInTime / oneSecond),
    minutesElapsed: Math.round(diffInTime / oneMinute),
    hoursElapsed: Math.round(diffInTime / oneHour),
    daysElapsed: Math.round(diffInTime / oneDay)
  }
}