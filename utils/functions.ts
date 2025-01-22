export const formatDate = (timestamp: number | string | Date): string => {
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) {
    throw new Error('Invalid timestamp provided');
  }
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};
