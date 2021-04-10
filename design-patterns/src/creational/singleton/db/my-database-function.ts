interface User {
  name: string;
  age: number;
}

// Function direclty invoked is a Singleton in the JavaScript
export const MyDatabaseFunction = (function () {
  const users: User[] = [];

  return {
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
  }  
})();
