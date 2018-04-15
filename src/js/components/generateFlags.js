import '../data.js'
import {flags} from "../data";

let datacopy = flags.slice();

let colorFilter =  datacopy.filter(function(element){
    return element.colors[0] === "blue";
});


console.log(randomFlag);

let array = [];

for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random()* colorFilter.length);
    array.push(randomNumber);

}

