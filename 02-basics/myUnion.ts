let score: number | string = 33;

score = 124;
score = "44";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let pawan: User | Admin = { name: "Pawan", id: 12 };

pawan = { username: "PCJ", id: 12 };

function getDbId(id: number | string) {
  // making some API calls
  console.log(`DB id is ${id}`);
}

getDbId(3);
getDbId("3");

// function getDbId(id: number | string){
// //    id.toLowerCase();        // gives an error as id could be a number as well

// }

function getDbIdd(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    console.log(id + 3);
  }
}

// array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3", "4"];
// const data3: string[] | number[] = [1, 2, "3", "4"];    // not allowed, either numbers array or string
const data3: (string | number | boolean)[] = ["1", "2", 4, true];

let pi: 3.14 = 3.14
// pi = 3.145  // not allowed

let seatAllotment: "aisle" | "middle" | "window"
// seatAllotment = "crew"     // it is not going to allow this


export {}