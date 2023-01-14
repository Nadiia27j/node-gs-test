const [, , operation, ...data] = process.argv;
const numbers = data.map(val => Number(val));

module.exports = {
    operation,
    numbers,
};