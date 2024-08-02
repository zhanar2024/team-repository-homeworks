//converting degrees Celcius into degrees Fahrenheit
const celcius = 25;
const fahrenheit = (celcius * 9) / 5 + 32;

console.log(`${celcius} °C is ${fahrenheit} °F.`);

//converting degree Fahrenheit into degrees Celcius

const fahr = Math.round(Math.random() * 101);
const celc = Math.round(((fahr - 32) * 5) / 9);

console.log(`${fahr} °F is ${celc} °C.`);
