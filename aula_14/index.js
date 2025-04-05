
function menor(ArrayTemp){
    let menorValor = ArrayTemp[0];
    let menorIndice = 0;

    for (let index = 0; index < ArrayTemp.length; index++) {
        if (menorValor > ArrayTemp[index]) {
            menorValor = ArrayTemp[index]
            menorIndice = index;
        }
        
    }
    
    return menorIndice;
}


function ordenaLegal(Number){

    const numberString = Number.toString()
    arrayAux = [];
    finalArray = [];

    for (let index = 0; index < numberString.length; index++) {
        arrayAux.push(parseInt(numberString[index]))
            
    } 
    
    for (let index = 0; index < numberString.length; index++) {
        let menorIndice = menor(arrayAux);
        finalArray.push(arrayAux[menorIndice])
        arrayAux.splice(menorIndice, 1)
            
    } 

    return console.log(finalArray)

}

ordenaLegal([554312])