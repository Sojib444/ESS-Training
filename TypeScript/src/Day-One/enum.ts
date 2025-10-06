enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}

type myUser = {
  name: string;
  role: UserRole;
};

const users: myUser[] = [
  { name: "Alice", role: UserRole.ADMIN },
  { name: "Bob", role: UserRole.USER },
  { name: "Charlie", role: UserRole.GUEST },
];

function canEdit(user: myUser): boolean {
  return user.role === UserRole.ADMIN;
}

users.forEach((u) => {
  console.log(`${u.name} can edit: ${canEdit(u)}`);
});

enum StatusCode {
  Ok = 200,
  NOT_FOUND = 404,
  ERROR = 500,
}

function handleResponse(code: StatusCode) {
  switch (code) {
    case StatusCode.Ok:
      console.log("Request succeeded!");
      break;
    case StatusCode.NOT_FOUND:
      console.log("Resource not found!");
      break;
    case StatusCode.ERROR:
      console.log("Server error occurred!");
      break;
  }
}

handleResponse(StatusCode.Ok); // Request succeeded!
handleResponse(StatusCode.NOT_FOUND); // Resource not found!
handleResponse(StatusCode.ERROR);


enum TransactionType {
    DEPOSIT = "DEPOSIT",
    WITHDRAWAL = "WITHDRAWAL",
    TRANSFER = "TRANSFER"
}

// us