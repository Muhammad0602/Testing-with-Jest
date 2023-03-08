const capitalize = string =>
string.split('').
map((char, index) => index === 0 ?char.toUpperCase() : char).
join('');

module.exports = capitalize;