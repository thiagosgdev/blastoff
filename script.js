
function averageAge(I, J, K, X, Y){
    return Math.floor((I + J + K + X + Y)/5);
}

function averageKmPerLiter(distance, gasSpent) {
    const kmPerLiter = distance / gasSpent ;
    return `Foi percorrido ${kmPerLiter}km/l`;
}

function lowestNumber(numberA, numberB, numberC){
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

function convertCelsiusToFahrenheit(temp){
    const fahre = ((temp * 9) / 5) + 32;
    return `Temp convertida: Fahrenheit: ${fahre}`
}

function multipleNumber(numberA, numberB){
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
    let DiffHoursInMinutes = diffHours * 60;
    let diffMinutes = Math.floor(diff / (1000 * 60)) - DiffHoursInMinutes;
    return `A partida durou: ${diffHours} horas e ${diffMinutes} minutos`;
}

function evenNumbers(numbers){
    let even = [];
    numbers.forEach((num) => {
        if((num % 2) === 0){
            even.push(num);
        }
    });
    return `Numeros pares: ${even}`
}

function cousinNumber(num){
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

function numberTable(num, tableSize){
    let i = 0;
    let result = [];
    while(i <= tableSize){
        result.push(num*i);
        i++;
    }
    return result;
}

function factorial(num){
    let result = num;
    let i = num;
    while(i > 1){
        i--;
        result = result * i;
    }
    return result;
}

function intersection(listA, listB){
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

function concat(listA, listB){
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

function matrices(axisX, axisY, values){
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

function palindrome (word){
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





