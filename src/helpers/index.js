// translates unix to normal time
export function timeConverter(UNIX) {
  const toDay = new Date(UNIX * 1000);
  const hour = toDay.getHours();
  const min = `0${toDay.getMinutes()}`;
  const sec = `0${toDay.getSeconds()}`;
  const time = `${hour}:${min.substr(-2)}:${sec.substr(-2)}`;
  return time;
}

// translates unix to normal date
export function dateConverter(UNIX) {
  const mon = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const toDay = new Date(UNIX * 1000);
  const day = toDay.getDate();
  const month = mon[toDay.getMonth()];
  const year = toDay.getFullYear();
  const date = `${day} ${month} ${year}`;
  return date;
}
