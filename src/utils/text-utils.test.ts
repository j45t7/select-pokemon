import { capitalizeFirstLetter, lowercaseFirstLetter } from './text-utils';

describe('String Utility Functions', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of a given string', () => {
      expect(capitalizeFirstLetter('hello')).toBe('Hello');
      expect(capitalizeFirstLetter('world')).toBe('World');
    });

    it('should not change a string that is already capitalized', () => {
      expect(capitalizeFirstLetter('Hello')).toBe('Hello');
    });

    it('should return an empty string when given an empty string', () => {
      expect(capitalizeFirstLetter('')).toBe('');
    });

    it('should handle strings with special characters correctly', () => {
      expect(capitalizeFirstLetter('!hello')).toBe('!hello');
      expect(capitalizeFirstLetter('123abc')).toBe('123abc');
    });
  });

  describe('lowercaseFirstLetter', () => {
    it('should lowercase the first letter of a given string', () => {
      expect(lowercaseFirstLetter('Hello')).toBe('hello');
      expect(lowercaseFirstLetter('World')).toBe('world');
    });

    it('should not change a string that is already lowercase', () => {
      expect(lowercaseFirstLetter('hello')).toBe('hello');
    });

    it('should return an empty string when given an empty string', () => {
      expect(lowercaseFirstLetter('')).toBe('');
    });

    it('should handle strings with special characters correctly', () => {
      expect(lowercaseFirstLetter('!Hello')).toBe('!Hello');
      expect(lowercaseFirstLetter('123ABC')).toBe('123ABC');
    });
  });
});