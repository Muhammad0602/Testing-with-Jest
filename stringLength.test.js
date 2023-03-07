const stringLength = require('./stringLength');

test('Count number of chars in string', () => {
    // Arrange
    const str = 'study'

    // Act
    const length = stringLength(str);

    // Assert
    expect(length).toBe(5); 
})

test('Check whether the string is empty', () => {
    // Arrange
    const str = ''

    // Act
    const result = () => stringLength(str);

    // Assert
    expect(result).toThrow('Characters must be in the range of 1 to 10'); 
})

test('Check whether the string is too long', () => {
    const str = 'I am glad to learn testing'
    const result = () => stringLength(str);
    expect(result).toThrow('Characters must be in the range of 1 to 10'); 
})