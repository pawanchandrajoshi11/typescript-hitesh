const User = {
  name: "Pawan",
  email: "pawanpcj@gmail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
let newUser = { name: "Hitesh", isPaid: false, email: "sdad@gmail.com" };
createUser(newUser);

function createCourse(): {} {
  return {};
}

function sendCourse({ name: string, price: number }): {} {
  return { name: "reactJs", price: 499 };
}

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser2(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser2({name: "", email: "", isActive: true});

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  isCardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "h",
  email: "hi@gamil.com",
  isActive: true,
};

myUser.email = "asfaf@gmail.com";
// myUser._id = "1231231"  // not allowed (read-only )

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    CVV: number;
  };

export {};
