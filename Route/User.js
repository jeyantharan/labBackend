const router = require("express").Router();

const userController = require("../Controller/User");

const userAuth = require('../Middleware/userAuth');

//create user
router.post("/createUser",userController.create_user);

//user login
router.post("/login",userController.login_user);

//admin verify user
router.patch("/verify-user",userAuth.AuthenticateToken,userController.verify_user);

// get all user 
router.get("/getAll",userAuth.AuthenticateToken,userController.get_all_users);

// get user by id
router.get('/:id',userController.get_user_by_id);


module.exports = router;
