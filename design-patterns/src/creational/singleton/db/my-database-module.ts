interface User {
  name: string;
  age: number;
}

const users: User[] = [];

// Module is a Singleton in the JavaScript
export const MyDatabaseClassic = {
  add(user: User): void {
    users.push(user);
  },
  remove(index: number): void {
    users.splice(index, 1);
  },
  show(): void {
    for (const user of users) {
      console.log(user);
    }
  },
};
