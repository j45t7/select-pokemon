import dayjs from 'dayjs';

export const formatDate = (dateString: string): string => {
  return dayjs(dateString).format('dddd, DD.MM.YYYY');
};