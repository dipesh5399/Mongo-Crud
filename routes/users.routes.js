const router = require('express').Router();

const userController = require('../controllers/users.controllers');

module.exports = router
    .get("/", userController.GetUserList)
    .get("/:id", userController.GetUserList)
    .put("/update/:id", userController.UpdateUser)
    .delete("/:id", userController.DeleteUser)
    .post("/", userController.AddNewUser);