import bcrypt from "bcryptjs";

const Users = [
  {
    name: "Admin User",
    email: "serhii.mahas@evalue.cz",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "User",
    email: "user@evalue.cz",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    name: "User2",
    email: "user2@evalue.cz",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    name: "User3",
    email: "user3@evalue.cz",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
  {
    name: "User4",
    email: "user4@evalue.cz",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: false,
  },
];

export default Users;
