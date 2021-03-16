/* 5 if with else statement */
/* do 5 arrays */
/* do 5 multi-dimensional arrays */
/* do 5 objects */
/* do 10 loops (for) */
/* calls from arrays */
/* calls from objects */

// ----------------------- IF STATEMENTS
// let quantChairs = prompt(`How many chais did you sell this form year?`);
let quantChairs = 18000;

if (quantChairs >= 40000) {
    console.log(`It was a excellent year.`);
} else if (quantChairs >= 20000) {
    console.log(`Maybe it wasn't a excellent year, but was a GOOD Year`)
} else {
    console.log(`It was a poor year.`)
}

// let quality = prompt(`What it was quality level?`);
let answerQuality = `99.5`;
let quality = parseInt(answerQuality);

if (quality > 95) {
    console.log(`Six sigma above 5.0, and your quality level was ${quality}%`);
} else if (quality >= 90) {
    console.log(`Quality was pretty good, your level was ${quality}%`);
} else {
    console.log(`Your quality really suck, you were below ${quality}%`)
}

//el mejor año, insertar cantidad de sillas vendidas por añor y mostrar el mejor y peor año respectivamente
let y2017 = 16;
let y2018 = 15;
let y2019 = 21;

if (y2019 >= y2018 && y2019 >= y2017) {
    console.log(`Best selling year was 2019 and you sold ${y2019} units.`);
    if (y2018 > y2017) {
        console.log(`Second best year was 2018 and you sold ${y2018} units.`);
    } else if (y2018 == y2017) {
        console.log(`2017 and 2018 was the same, and you sold about ${y2018} units in both years.`);
    } else {
        console.log(`2018 was the worst year, and you sold ${y2018} units`);
    }
} else if (y2018 >= y2019 && y2018 >= y2017) {
    console.log(`Best selling year was 2018 and you sold ${y2018} units.`);
    if (y2019 > y2018) {
        console.log(`Second best year was 2019 and you sold ${y2019} units.`);
    } else if (y2019 == y2018) {
        console.log(`2018 and 2019 was the same, and you sold about ${y2019} units in both years.`);
    } else {
        console.log(`2019 was the worst year, and you sold ${y2019} units`);
    }
} else if (y2017 >= y2019 && y2017 >= y2018) {
    console.log(`Best selling year was 2017 and you sold ${y2017} units.`);
    if (y2018 > y2019) {
        console.log(`Second best year was 2018 and you sold ${y2018} units.`);
    } else if (y2018 == y2019) {
        console.log(`2018 and 2019 was the same, and you sold about ${y2018} units in both years.`);
    } else {
        console.log(`2018 was the worst year, and you sold ${y2018} units`);
    }
}

for (let i = 0; i <= 2; i++) {
    console.log('--------------------' + i);
}

// precio de entradas según edad, cantidad de grupo edad, total vendido,
// cuanta gente fue y de que tipo de grupo 
// el precio aumenta un 30% si se vendieron menos de 30 entradas
// se mantiene igual si se vendieron hasta 50 entradas
// si se vendieron mas de 50, hay un 10% de descuento
// la capacidad máxima del local es de 57 personas, si se supera la capacidad
// máxima se debe seleccionar quien queda afuera de la sala (se le da prioridad
// de entrada a los chicos, jubilados y ex-soldados)
const childPay = 10;
const teenagerPay = 15;
const adultPay = 25;
const seniorPay = 20;
const exPrivate = 10;
const maxCap = 57;
let maxCapKey = false;
const overPrice = 1.3;
const discount = 0.9;
let diffPrice;
// let qChildren = prompt(`How many children did they go?`);
// let qTeenagers = prompt(`How many teenagers did they go?`);
// let qAdults= prompt(`How many Adults did they go?`);
// let qSeniors = prompt(`How many Seniors did they go?`);
// let qExPrivates = prompt(`How many ex-privates did they go?`);

let qChildren = 90;
let qTeenagers = 10;
let qAdults = 5;
let qSeniors = 7;
let qExPrivates = 2;
let qPeople = qChildren + qTeenagers + qAdults + qSeniors + qExPrivates;
console.log(qPeople);

if (qPeople >= maxCap) {
    console.log(`Someone won't enter to the cinema. You must leave out ${qPeople - maxCap} people.`);
    console.log(`Please select who in the next categories will be out`);
    if (qTeenagers >= 1) {
        console.log(`There are ${qTeenagers} teenagers.`);
        let cantEnterTeen = `YEs`; //this is the answer to the question 'do you want any of them out of the cinema room?' answer will be 'yes' or 'no'
        console.log(cantEnterTeen);
        if (cantEnterTeen.toLowerCase() == 'yes') {
            let ansCantEnterTeen = 5; //how many teenager can't enter to the cinema room, only accept numbers.
            let qCantEnterTeen = parseInt(ansCantEnterTeen);
            console.log(`You are leaving out ${qCantEnterTeen} teenagers.`);
            qTeenagers = qTeenagers - qCantEnterTeen;
        }
    }
    if (qAdults >= 1) {
        console.log(`There are ${qAdults} adults.`);
        let cantEnterAdult = `YEs`; //this is the answer to the question 'do you want any of them out of the cinema room?' answer will be 'yes' or 'no'
        console.log(cantEnterAdult);
        if (cantEnterAdult.toLowerCase() == 'yes') {
            let ansCantEnterAdult = 5; //how many teenager can't enter to the cinema room, only accept numbers.
            let qCantEnterAdult = parseInt(ansCantEnterAdult);
            console.log(`You are leaving out ${qCantEnterAdult} adults.`);
            qAdults = qTeenagers - qCantEnterAdult;
        }
    } else if (qTeenagers == 1) {
        console.log(`There is ${qTeenagers} teenager.`);
    } else {
        console.log(`There isn't any teenager.`);
    }
    if (qAdults > 1) {
        console.log(`There are ${qAdults} adults.`);
    } else if (qAdults == 1) {
        console.log(`There is ${qAdults} aldut.`);
    } else {
        console.log(`There isn't any adult.`);
    }
} else {
    maxCapKey = true;
}

let paymentChildren = childPay * qChildren;
let paymentTeenager = teenagerPay * qTeenagers;
let paymentAdults = adultPay * qAdults;
let paymentSenior = seniorPay * qSeniors;
let paymentExprivates = exPrivate * qExPrivates;
let totalPayment = paymentChildren + paymentTeenager + paymentAdults + paymentSenior + paymentExprivates;
if (maxCapKey == true) {
    if (qPeople >= 50) {
        totalPayment *= discount;
        diffPrice = `10% discount, 'cause the cinema room is full.`;
        console.log(`Total payment is $` + totalPayment + ` with ` + diffPrice);
    } else if (qPeople < 30) {
        totalPayment *= overPrice;
        diffPrice = `30% overprice, cause the cinemaroom is almost empty.`;
        console.log(`Total payment is $` + totalPayment + ` with ` + diffPrice);

    } else {
        diffPrice = `any discount`;
        console.log(`Total payment is $` + totalPayment + ` with ` + diffPrice);
    }
} else {
    console.log(`Max capacity reached`);
}




// ARRAYS


for (let i=0; i<=4; i += 1){
    console.log(`----------------ARRAYS` + i + `-------------------------------`);
}

// let users = [`jose`, `maria`, `alberto`, `fernando`]

// console.log(users);


// let array = [];

// array.push(['Juan','pedro','marcelo']);
// array.push('gonzales','silva','rodriguez');
// array[0].push('mario');
// n = array[0].length;


// console.log(array[0].length);
// console.log(array);
// console.log(array[2]);

// hacer mediante arrays un sistema en donde ingresar nombres y notas según alumno y guardarlo en arrays
//hacerlo para 4 alumnos, mostrar nombre, apellido, nota y aprobado

// let name = [];
// let surename = [];
// let notes = [];

// students.push(prompt('Inserte nombre'));
// students.push(prompt(`Inserte apellido`));

// students[0].push('garcia');

// console.log(students)



//  Objects 


const object = {
    name: 'Arnaldo',
    surename: 'Paredes',
    age: 27,
    senior: true
}

console.log(object.name);
console.log(object.age);
console.log(object.name);
