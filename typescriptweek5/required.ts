interface User {
  id?: string;
  name?: string;
  email?: string;
}

const user: Required<User> = {
  id: "U001",
  name: "Roshan",
  email: "roshan@example.com"
};

console.log(user);