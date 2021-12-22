export default function timesBetweenDates(date1, date2) {
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