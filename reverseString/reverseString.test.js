const reverseString = require('./reverseString');

test('properly reverses a string', () => {
    // Arrange
    const string = 'temur';

    // Act
    const reverse = 'rumet';
    const result = reverseString(string);

    // Assert
    expect(result).toBe(reverse);
   
})

test('properly reverse this string', () => {
    const string = 'roebe';
    const reverse = 'ebeor';
    const result = reverseString(string);
    expect(result).toBe(reverse); 
})