function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string): string {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

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
const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
