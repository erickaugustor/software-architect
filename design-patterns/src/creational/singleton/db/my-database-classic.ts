interface User {
  name: string;
  age: number;
}

export class MyDatabaseClassic {
  private static instance: MyDatabaseClassic | null = null;

  private users: User[] = [];

  private constructor() {} // Not allow new

  public static getInstance(): MyDatabaseClassic {
    if (MyDatabaseClassic.instance === null) {
      MyDatabaseClassic.instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic.instance;
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

const db1 = MyDatabaseClassic.getInstance();
const db2 = MyDatabaseClassic.getInstance();

console.log(db1 === db2);

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'Luis', age: 10 });
myDatabaseClassic.show();
myDatabaseClassic.remove(1);