let varA = "A"
let varB = "B"
let varC = "C"

const sec = varA;
varA = varB;
varB = varC;
varC = sec

console.log(varA, varB, varC)	