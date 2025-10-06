function logClass(target: Function) {
  console.log("Class created:",target.name);
}

@logClass
class User {
  constructor(public name: string) {};
}

const user = new User("Sojib");

export{};
