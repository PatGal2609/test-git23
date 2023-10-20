// Fuction
const usdCurr = 97.5;
const eurCurr = 102.3;
const discount = 0.75;
function convert(amount, curr) {
    return (curr * amount);
}
const res = convert(500, usdCurr);
function prmotion(result) {
    console.log(result * discount);
}

prmotion(res)
convert(500, usdCurr);
convert(750, eurCurr);
const test = 'Strada';
for (let i = 0; i < test.length; i++) {
    console.log(`${test.toUpperCase()[i]} \n`);
}
console.log(`${test[0]} \n ${test[1]}`);