const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function crito(word){
    let cripto = ""

    for (let index = 0; index < word.length; index++) {
        let letter = word[index];
        for (let indexA = 0; indexA < alphabet.length; indexA++) {
            if (alphabet[indexA] == letter) {
                cripto+=(indexA+1)
            }
            
        }
        
    }

    return console.log(cripto)
}

crito("MAMACO")