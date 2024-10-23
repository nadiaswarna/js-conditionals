/**
 * TERNARY -- > three parts
 */

 const age = 12;
// if(age >=18){
//     console.log('You can vote')
// }
// else{
//     console.log('Ghumai thako')
// }

//simple ternary
//age >= 18 ? console.log('vote dio') : console.log('ghumai jau')

let price = 500;
const isLeader = false;

if(isLeader === true){
    price = 0;
}
else {
    price = price + 100;
}
//console.log(price)

price = isLeader === true ? 0 : price + 100;



if(isLeader === true){
    if(price > 1000){
        price = price /2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 1000;
}

//Feel free to ignore this one
price = isLeader === true ?
 price > 1000 ? 
 price /2 : 0 
 : price + 1000;