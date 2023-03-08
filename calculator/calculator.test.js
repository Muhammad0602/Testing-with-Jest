const calculator = require('./calculator');

describe('properly implementing calculator methods', () =>{
    test('properly adds numbers', () => {
        expect(calculator.add(8, 4)).toBe(12);
        expect(calculator.add(8, 2)).toBe(10);
        expect(calculator.add(18, 3)).toBe(21);
    });

    test('properly subtracts numbers', () => {
        expect(calculator.subtract(8, 4)).toBe(4);
        expect(calculator.subtract(8, 2)).toBe(6);
        expect(calculator.subtract(18, 3)).toBe(15);
    });

    test('properly divide numbers', () => {
        expect(calculator.divide(8, 4)).toBe(2);
        expect(calculator.divide(8, 2)).toBe(4);
        expect(calculator.divide(18, 3)).toBe(6);
    });

    test('properly multiply numbers', () => {
        expect(calculator.multiply(8, 4)).toBe(32);
        expect(calculator.multiply(8, 2)).toBe(16);
        expect(calculator.multiply(18, 3)).toBe(54);
    });
});