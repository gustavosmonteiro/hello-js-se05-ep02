const array = [1,2,3,4,5,6,7,8,9,10];
// [ '1i', '2p', '3i', '4p', '5i', '6p', '7i', '8p', '9i', '10p' ]

/*
let result = [];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        result.push(array[i]+"x");
    } else {
        result.push(array[i]+"p");
    }
    
}
*/

//result = array.map(e => e % 2 == 0 ? e + 'p' : e + 'i');

result = array.map(e => e % 2 ? e + 'i' : e + 'p');

console.log(result);




