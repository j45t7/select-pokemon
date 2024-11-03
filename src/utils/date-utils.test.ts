// formatDate.test.ts
import dayjs from 'dayjs';
import { formatDate } from './date-utils';

describe('formatDate', () => {
  it('should format a valid date string correctly', () => {
    const inputDate = '2024-03-06T13:37:00';
    const formattedDate = formatDate(inputDate);
    const expectedOutput = dayjs(inputDate).format('dddd, DD.MM.YYYY');

    expect(formattedDate).toBe(expectedOutput);
  });

  it('should handle different date formats', () => {
    const inputDate1 = '2024-11-03T15:30:00';
    const inputDate2 = '2024-11-03';
    expect(formatDate(inputDate1)).toBe(dayjs(inputDate1).format('dddd, DD.MM.YYYY'));
    expect(formatDate(inputDate2)).toBe(dayjs(inputDate2).format('dddd, DD.MM.YYYY'));
  });

  it('should handle invalid date strings gracefully', () => {
    const invalidDate = 'invalid-date';
    const formattedDate = formatDate(invalidDate);
    expect(formattedDate).toBe('Invalid Date');
  });
});
