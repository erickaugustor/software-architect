interface User {
  name: string;
  age: number;
}

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;

  private users: User[] = [];

  private constructor() {} // Not allow new

  public get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

const db1 = MyDatabaseClassic.instace;
const db2 = MyDatabaseClassic.instace;

console.log(db1 === db2);

const myDatabaseClassic = MyDatabaseClassic.instace;
myDatabaseClassic.add({ name: 'Luis', age: 10 });
myDatabaseClassic.show();
myDatabaseClassic.remove(1);
myDatabaseClassic.show();
