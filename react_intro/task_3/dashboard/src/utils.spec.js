import { getCurrentYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils functions', () => {

    test('getCurrentYear returns the current year', () => {
        expect(getCurrentYear()).toBe(new Date().getFullYear());
    });

    test('getFooterCopy returns correct string when true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School main dashboard');
    });

    test('getFooterCopy returns correct string when false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School');
    });

    test('getLatestNotification returns correct string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });

});