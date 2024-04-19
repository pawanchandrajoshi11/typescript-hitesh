const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(value: boolean | number): boolean | number {
  return value;
}

function identityTwo(value: any): any {
  return value;
}

function identityThree<TYPE>(value: TYPE): TYPE {
  return value;
}

identityThree("Pawan");
identityThree(true);
identityThree(15);

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "Pawan", type: 12 });

// generic function
function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

// generic arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};

function anotherFunction<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, "4");

// new examples

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addTwoCart(product: T) {
    this.cart.push(product);
  }
}
