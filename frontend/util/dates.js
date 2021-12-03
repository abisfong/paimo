export function minutesBetweenDates(date1, date2) {
  const oneMinute = 1000 * 60
  const diffInTime = date1.getTime() - date2.getTime();
  return  Math.round(diffInTime / oneMinute);
}

export function hoursBetweenDates(date1, date2) {
  const oneHour = 1000 * 60 * 60;
  const diffInTime = date1.getTime() - date2.getTime();
  return  Math.round(diffInTime / oneHour);
}

export function daysBetweenDates(date1, date2) {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffInTime = date1.getTime() - date2.getTime();
  return  Math.round(diffInTime / oneDay);
}