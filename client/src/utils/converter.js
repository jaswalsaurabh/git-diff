import { format, parseISO, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';

export const formatDateDifference = (dateString) => {
  const givenDate = parseISO(dateString);
  const now = new Date();

  const daysDifference = differenceInDays(now, givenDate);

  if (daysDifference === 0) {
    const hoursDifference = differenceInHours(now, givenDate);
    if (hoursDifference === 0) {
      const minutesDifference = differenceInMinutes(now, givenDate);
      return `${minutesDifference} minute${minutesDifference !== 1 ? 's' : ''} ago`;
    }
    return `${hoursDifference} hour${hoursDifference !== 1 ? 's' : ''} ago`;
  } else if (daysDifference <= 6) {
    return `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`;
  } else {
    return "on " + format(givenDate, 'MMMM d, yyyy');
  }
};

