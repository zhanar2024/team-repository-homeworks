// The Age Calculator
// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

const currentYear = 2024;
const birthYear = 1955;

const age1 = currentYear - birthYear;
const age2 = currentYear - birthYear - 1;
console.log(`They are either ${age1} or ${age2}.`);
