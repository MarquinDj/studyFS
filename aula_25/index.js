const highier = (a, b) => a > b ? a : b;

const ePaisagem =  (largura, altura) => largura > altura;

const fizzBuzz = (number) => {
    let word = "";

    const div5 = number%5 === 0;
    const div3 = number%3 === 0;

    if (Number.isNaN(number) || !(div3 || div5)){
        return word+= number
    }

    if(div3){
        word += "Fizz"
    }
    
    if(div5){
        word += "Buzz"
    }

    return word;
}

for (let index = 0; index <= 100; index++) {
    console.log(fizzBuzz(index));
    
}

