let constructors = [];
let selfNumbers = [];

for(let i = 1; i <10000; i++) {
    let number = i;
    numString = String(number).split('');
    num = numString.map(Number);

    let total = 0;
    let addPlaceValue = 0;
    
    for(let j = 0; j < num.length; j++) {
        addPlaceValue += num[j];
    }

    total = number + addPlaceValue;
    constructors.push(total);
}

for(let i = 1; i < 10000; i++) {
    if(constructors.indexOf(i) === -1) {
        selfNumbers.push(i);
    }
}

for(let i = 0; i < selfNumbers.length; i++){
    console.log(selfNumbers[i]);
}