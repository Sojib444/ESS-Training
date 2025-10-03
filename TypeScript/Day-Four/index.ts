type User = {
  id: number;
  name: string;
  // ... other fields
};

async function fetchUser(): Promise<User> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json() as Promise<User>;
}

function fetchUser1() {
  return {a:"sojib"};
}

type Return = ReturnType<typeof fetchUser>;

type Admin = Awaited<Return>;

async function printUser() {
  const user: User =  await fetchUser();
  console.log(user.name); // ✅ Type-safe if we refine the type
}


export{};