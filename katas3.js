const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let lista = []
    for(let i = 1; i <= 25; i++){
       lista.push(i)
    }
    return lista
}




function kata2() {
    let lista = []
    for(let i = 25; i > 0; i--){
       lista.push(i)
    }
    return lista
}




function kata3() {
    let lista = []
    for(let i = -1; i >= -25; i--){
       lista.push(i)
    }
    return lista
}




function kata4() {
    let lista = []
    for(let i = -25; i <= -1; i++){
       lista.push(i)
    }
    return lista
}




function kata5() {
    let lista = []
    for(let i = 25; i >= -25; i--){
       if(i%2 != 0){
        lista.push(i)
       }
    }
    return lista
}




function kata6() {
    let lista = []
    for(let i = 3; i <= 100; i++){
       if(i%3 == 0){
        lista.push(i)
       }
    }
    return lista
}




function kata7() {
    let lista = []
    for(let i = 100; i >= 0; i--){
       if(i%7 == 0){
        lista.push(i)
       }
    }
    return lista
}




function kata8() {
    let lista = []
    for(let i = 100; i >= 0; i--){
        if(i%7 == 0 || i%3 == 0){
            lista.push(i)
        }
    }
    return lista
}




function kata9() {
    let lista = []
    for(let i = 100; i >= 0; i--){
        if(i%5 == 0 && i%2 != 0){
            lista.push(i)
        }
    }
    return lista
}




function kata10() {
    return sampleArray
}





function kata11() {
    let list = []
    for(i in sampleArray){
        if(sampleArray[i]%2 == 0){
            list.push(sampleArray[i])
        }
    }
    return list
}




function kata12() {
    let list = []
    for(i in sampleArray){
        if(sampleArray[i]%2 != 0){
            list.push(sampleArray[i])
        }
    }
    return list
}




function kata13() {
    let list = []
    for(i in sampleArray){
        if(sampleArray[i]%8 == 0){
            list.push(sampleArray[i])
        }
    }
    return list
}




function kata14() {
    let list = []
    for(i in sampleArray){
        list.push(sampleArray[i]**2)
    }
    return list
}




function kata15() {
    let sum = 0
    for(let i = 1; i <= 20; i++){
        sum += i
    }
    return sum
}




function kata16() {
    let sum = 0
    for(i in sampleArray){
        sum += sampleArray[i]
    }
    return sum
}




function kata17() {
    let menor = 10000
    for(i in sampleArray){
        if(sampleArray[i] < menor){
            menor = sampleArray[i]
        }
    }
    return menor
}




function kata18() {
    let maior = 0
    for(i in sampleArray){
        if(sampleArray[i] > maior){
            maior = sampleArray[i]
        }
    }
    return maior
}

