"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 124;
score = "44";
var pawan = { name: "Pawan", id: 12 };
pawan = { username: "PCJ", id: 12 };
function getDbId(id) {
    // making some API calls
    console.log("DB id is ".concat(id));
}
getDbId(3);
getDbId("3");
// function getDbId(id: number | string){
// //    id.toLowerCase();        // gives an error as id could be a number as well
// }
function getDbIdd(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        console.log(id + 3);
    }
}
// array
var data = [1, 2, 3];
var data2 = ["1", "2", "3", "4"];
// const data3: string[] | number[] = [1, 2, "3", "4"];    // not allowed, either numbers array or string
var data3 = ["1", "2", 4, true];
var pi = 3.14;
// pi = 3.145  // not allowed
var seatAllotment;
