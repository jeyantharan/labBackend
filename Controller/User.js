const { connect } = require("http2");
const userModel = require("../Model/User");
const bcrypt = require("bcrypt");

const jwt = require("../Middleware/jwt");
const admin = require("../Middleware/admin");

//create user
exports.create_user = async (req, res) => {
  try {
    let newUser = new userModel(req.body);

    const saltRound = 10;
    const hasedPassword = await bcrypt.hash(newUser.Password, saltRound);
    newUser.Password = hasedPassword;

    const existingUser = await userModel.find({ Email: newUser.Email });

    if (existingUser.length == 0) {
      let saveDetail = await newUser.save().then((saveDetail) => {
        res.status(200).send(saveDetail);
      });
    } else {
      res.status(409).send("User already created");
    }
  } catch (err) {
    res.status(409).send("Error " + err);
  }
};

//login user
exports.login_user = async (req, res) => {
  try {
    let email = req.body.Email;
    let password = req.body.Password;

    const user = await userModel.findOne({ Email: email });

    if (user != null && user.UserVerified == true) {
      try {
        if (await bcrypt.compare(password, user.Password)) {
          const token = await jwt.CreateToken(user.Username, email,user.Role);
          res.status(200).send({ Message: "Login Successfully", Token: token });
        } else {
          res.status(403).send("Password wrong");
        }
      } catch (err) {
        res.status(409).send("Error " + err);
      }
    } else {
      res.status(400).send("User not found or not verified by admin");
    }
  } catch (err) {
    res.status(409).send("Error " + err);
  }
};

// verify user

exports.verify_user = async (req, res) => {
  try {
    userDatails = req.user;
    const verify = await admin.verifyAdmin(userDatails);

    console.log(verify);

    if (verify == true) {
      const userId = req.body.Id;

      const user = await userModel.findById(userId);

      if (user != null) {
        updatevalue = {
          UserVerified: true,
        };
        user._id = user._id;

        let details = await userModel.findOneAndUpdate(user._id, updatevalue, {
          new: true,
        });
        res.status(200).send("user verified");
      } else {
        res.status(400).send("User not found");
      }
    } else {
      res.status("401").send("Unauthorized request");
    }
  } catch (err) {
    res.status(409).send("Error " + err);
  }
};



//get all users

exports.get_all_users = async(req,res)=>{
    try {
        userDatails = req.user;
        const verify = await admin.verifyAdmin(userDatails);

        if (verify == true) {
            let getAllUser = await userModel.find();
            res.status(200).send(getAllUser)
        } else {
            res.status("401").send("Unauthorized request");
        }

    } catch (err) {
        res.status(409).send("Error " + err);
    }
}


//get user by id

exports.get_user_by_id = async(req,res)=>{
    try {
        const userId = req.params.id;
        const user = await userModel.findById(userId)
        res.status(200).send(user)
    } catch (err) {
        res.status(409).send("Error " + err);
    }
}