"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
addTwo(5);
getUpper("hello");
signUpUser("Pawan", "oawa@gmail.com", true);
// function getValue(myVal: number): boolean{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK"
// }
// Arrow function
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
