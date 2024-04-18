// class User {
//   private email: string;
//   #name: string;        // # also makes it private, private keyword is in TS and # is in JS
//   public readonly city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

class User {
  protected _courseCount = 1;

  readonly city: string = "CN";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}

  private deletToken() {
    console.log("token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than one");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
    private isFamily:boolean = true
    changeCourseCount(){
        this._courseCount = 4;
    }
}

const pawan = new User("pawanpcj@gmai.com", "Pawan");
// pawan.city = "Mbd"       // cannot be changed because of readOnly
pawan.city;
