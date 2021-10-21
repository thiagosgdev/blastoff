
function averageAge(I, J, K, X, Y){ //OK
    return Math.floor((I + J + K + X + Y)/5);
}

function averageKmPerLiter(distance, gasSpent) { //OK
    const kmPerLiter = distance / gasSpent ;
    return `Foi percorrido ${kmPerLiter}km/l`;
}

function lowestNumber(numberA, numberB, numberC){//OK
    if(numberA < numberB){
        if(numberA < numberC){
            return numberA;
        }
        else{
            return numberC;
        }
    }else if(numberB < numberC){
        return numberB;
    }else{
        return numberC;
    }

    //Poderia ser feito também usando a função nativa do Javascript
    // return Math.min(numberA, numberB, numberC);
}

function convertCelsiusToFahrenheit(temp){//OK
    const fahre = ((temp * 9) / 5) + 32;
    return `Temp convertida: Fahrenheit: ${fahre}`
}

function multipleNumber(numberA, numberB){ //OK
    const rest = numberA % numberB;
    if(rest === 0){
        return `Numero: ${numberA} é multiplo de ${numberB}`;
    }else{
        return `Numero: ${numberA} não é multiplo de ${numberB}`;
    }
}

function footballMatch(startTime, endTime){
    let dateStart = new Date("2021-10-21 "+ startTime);
    let dateEnd = new Date("2021-10-21 "+ endTime);
    const diff = Math.abs(dateStart.getTime() - dateEnd.getTime());
    let diffHours = Math.floor(diff / (1000* 60 * 60));
    letDiffHoursInMinutes = diffHours * 60;
    let diffMinutes = Math.floor(diff / (1000 * 60)) - letDiffHoursInMinutes;
    return `A partida durou: ${diffHours} horas e ${diffMinutes} minutos`;



    // const startHour = startTime.substr(0,2);
    // const startMinutes = startTime.substr(3,2);
    // const endHour = endTime.substr(0,2);
    // const endMinutes = endTime.substr(3,2);    
    // let diffHours = 0;
    // let diffMinutes = 0;
    // if((startHour >= 0 && startHour < 24) && (endHour > 0 && endHour < 24)){        
    //     if((startMinutes >= 0 && startMinutes < 60) && (endMinutes >= 0 && endMinutes < 60)){
    //         diffMinutes = endMinutes - startMinutes;
    //         if(diffMinutes < 0){
    //             diffMinutes += 60;
    //         }
    //         diffHours = endHour - startHour;
    //         if(diffHours < 0){
    //             diffHours += 24;
    //         }
    //         // if(((diffMinutes + endMinutes) === 60) && ((startHour + 1) === endHour)){

    //         // }
    //     }
    // }
    return `A partida durou: ${diffHours} horas e ${diffMinutes} minutos`;
}

function evenNumbers(numbers){//OK
    let even = [];
    numbers.forEach((num) => {
        if((num % 2) === 0){
            even.push(num);
        }
    });
    return `Numeros pares: ${even}`
}

function cousinNumber(num){//OK
    let cousinCount = 3;
    for(let i=1;i <= num; i++){
        if((num % i) === 0){
            cousinCount--;
        }
        if((~~(num / i) < i) && (cousinCount > 0) && (i === num)){
            return `O numero ${num} é primo CONT ${cousinCount} i${i}`;
        }
        if(cousinCount === 0){
            return `O numero ${num} NAO é primo`;
        }
    }
}

function numberTable(num, tableSize){//OK
    let i = 0;
    let result = [];
    while(i <= tableSize){
        result.push(num*i);
        i++;
    }
    return result;
}

function factorial(num){//OK
    let result = num;
    let i = num;
    while(i > 1){
        i--;
        result = result * i;
    }
    return result;
}

function intersection(listA, listB){//OK
    let result = [];
    for(let i = 0; i < listA.length; i++){
        for (let j = 0; j < listB.length; j++){
            if(listA[i] === listB[j]){
                result.push(listA[i]);
            }
        } 
    }
    return `${result}`;
}

function concat(listA, listB){//OK
    let result = [];
    const listSize = listA.length >= listB.length ? listA.length : listB.length;
    for(let i = 0; i < listSize; i++){
        if(listA[i] != ""){
            result.push(listA[i]);
        }
        if(listB[i] != ""){
            result.push(listB[i]);
        }
    }
    return `${result}`;
}

function matrices(axisX, axisY, values){//OK
    let result = [];
    let aux = []
    let cont = 0;
    for(let i = 0; i < axisX; i++){            
        for(let j = 0; j < axisY; j++){
            aux.push(values[cont])
            cont++;
        }
        result.push(aux)       
        aux = [];
    }
    return result;
}

function palindrome (word){//OK
    let wordSplit = word.toLowerCase().split("");
    let wordLength = Math.floor(wordSplit.length / 2);
    let backwards = wordSplit.length-1;
    for(i = 0; i < wordLength; i++){
        if(wordSplit[i] !== wordSplit[backwards]){
            return "Não é um palindromo";    
        }        
        backwards--;
    }
    return "É um palimdromo";
}





