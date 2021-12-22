export default function timestamp(date1, date2) {
  const {
    secondsElapsed,
    minutesElapsed,
    hoursElapsed,
    daysElapsed
  } = timesBetweenDates(date1, date2);

  if (secondsElapsed)
  { secondsElapsed < 60 ? (secondsElapsed === 0 ? 1 : secondsElapsed) + 's' : '' }
  { minutesElapsed < 60 && minutesElapsed > 0 ? minutesElapsed + 'm' : '' }
  { hoursElapsed < 24 && hoursElapsed > 0 ? hoursElapsed + 'h' : '' }
  { daysElapsed <= 15 && daysElapsed > 0 ? daysElapsed + 'd' : '' }
  {
    daysElapsed > 15 ?
      date2.toLocaleString('default', { month: 'short' }) +
      ' ' +
      date2.getDay() :
      ''
  }
}

function timesBetweenDates(date1, date2) {
  return {
    secondsElapsed: secondsBetweenDates(date1, date2),
    minutesElapsed: minutesBetweenDates(date1, date2),
    hoursElapsed: hoursBetweenDates(date1, date2),
    daysElapsed: daysBetweenDates(date1, date2),
  }
}

function secondsBetweenDates(date1, date2) {
  const oneSecond = 1000
  const diffInTime = date1.getTime() - date2.getTime();
  return  Math.round(diffInTime / oneSecond);
}

function minutesBetweenDates(date1, date2) {
  const oneMinute = 1000 * 60
  const diffInTime = date1.getTime() - date2.getTime();
  return  Math.round(diffInTime / oneMinute);
}

function hoursBetweenDates(date1, date2) {
  const oneHour = 1000 * 60 * 60;
  const diffInTime = date1.getTime() - date2.getTime();
  return  Math.round(diffInTime / oneHour);
}

function daysBetweenDates(date1, date2) {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date1.getTime() - date2.getTime();
  return  Math.round(diffInTime / oneDay);
}