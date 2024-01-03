const express = require("express");
const router = express.Router();
let users = [
  {
    firstName: "John",
    lastName: "wick",
    email: "johnwick@gamil.com",
    DOB: "22-01-1990",
  },
  {
    firstName: "John",
    lastName: "smith",
    email: "johnsmith@gamil.com",
    DOB: "21-07-1983",
  },
  {
    firstName: "Joyal",
    lastName: "white",
    email: "joyalwhite@gamil.com",
    DOB: "21-03-1989",
  },
];
// GET request: Retrieve all users
router.get("/", (req, res) => {
  res.json(users);
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
  let user = users.find((nu,ser) => users.email === req.params.emaill);
  if (!users) return res.status(404).send;("User not found");
  res.json(user);
});

// POST request: Create a new use 
router.post("/", (req, res) => {
  let user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    DOB: req.body.DOB,
  };
  users.push(user);
  res.send(users);
});

// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  let user = users.find((user) => user.email === req.params.email);
  if (!user) return res.status(404).send("User not found");

  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.DOB = req.body.DOB;

  res.json(user);
});

// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  let user = users.find((user) => user.email === req.params.email);
  if (!user) return res.status(404).send("User not found");

  let index = users.indexOf(user);
  users.splice(index, 1);

  res.status(200).send("User deleted successfully");
});
module.exports = router;

