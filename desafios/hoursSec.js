function hour(hour){
    let hours = hour[0] + hour[1]
    let minutes = hour[3] + hour[4]
    let sec = hour[6] + hour[7]

    let final = (parseFloat(hours) * 60) + parseFloat(minutes) + parseFloat(sec)/60 

    return final
}

console.log(hour("1:00:00"))