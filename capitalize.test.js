const capitalize = require('./capitalize');

test('properly capitalize the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('name')).toBe('Name');
})