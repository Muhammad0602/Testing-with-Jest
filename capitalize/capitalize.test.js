const capitalize = require('./capitalize');

test('properly capitalize the first letter', () => {
    const string = 'hello';
    const output = 'Hello';
    const result = capitalize(string);
    expect(capitalize(result)).toBe(output);

    expect(capitalize('name')).toBe('Name');
})