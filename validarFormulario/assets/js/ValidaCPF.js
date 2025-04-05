class ValidaCPF  {
    constructor(cpf) {
        this.cpf = cpf.replace(/\D/g, "").split('');
    }

    checkValid() {
        let initialValue = 0;
        const reducedCpf = this.cpf.slice(0, 9);
        const sumWithInitial = reducedCpf.reduce(
            (accumulator, currentValue, index) => {
                let multiplicador = 10 - (index)
                return accumulator + Number(currentValue) * multiplicador;
            },
            initialValue
        );
        const firstDigit = 11 - sumWithInitial % 11
        reducedCpf.push(String(firstDigit))
        const sumWithFirstDigit = reducedCpf.reduce(
            (accumulator, currentValue, index) => {
                let multiplicador = 11 - (index)
                return accumulator + Number(currentValue) * multiplicador;
            },
            0
        );
        const SecondDigit = 11 - sumWithFirstDigit % 11
        reducedCpf.push(String(SecondDigit))
        
        return this.cpf.join('') === reducedCpf.join('');
    }
}


// let test = new ValidaCPF("388.057.680-73").checkValid()

// console.log(test)