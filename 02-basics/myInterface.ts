/* we can do the same implementation using TYPE , but the key difference between the two is that a type
 cannot be re-opened to add new properties vs an interface which is always extendable */

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;s
  startTrial(): string;
  getCoupon(couponname: string, value: number): number;
}

interface User {
  // this is also called as reopening of an interface
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: User = {
  dbId: 22,
  email: "pcj@gmail.com",
  userId: 213,
  githubToken: "token",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "Pawan", val: 10) => {
    return 10;
  },
};
hitesh.email = "abcs@gmail.com";
