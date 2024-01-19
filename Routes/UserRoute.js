const express = require('express');
const { createUser, getAllUsers, updateUser, getSingleUser, deleteUser } = require('../Controllers/UserController');
const router = express.Router()


router.route("/create/user").post(createUser);
router.route("/get/users").get(getAllUsers);
router.route("/update/user/:id").put(updateUser);
router.route("/get/single/user/:id").get(getSingleUser);
router.route("/delete/user/:id").delete(deleteUser);

module.exports = router;