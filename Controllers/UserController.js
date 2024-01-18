const User = require('../Models/UserModel')


// Create a User
exports.createUser = async (req, res) => {
    try {
        const { name, email, dob, country } = req.body;
        if (!name || !email || !dob || !country) {
            return res.status(400).json({
                success: false,
                message: "Please fill all the required fields"
            })
        }

        let user = await User.create({
            name, email, dob, avatar: {
                public_id: "Dummy_Img",
                url: "https://yadavashishdhirendra.github.io/MLG-Newsletter-1.github.io/profile-boy.png"
            }, country
        })


        res.status(200).json({
            success: true,
            message: "User Created Success",
            user,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// Get All User
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ _id: -1 })
        if (users.length <= 0) {
            return res.status(400).json({
                success: false,
                message: "There is No Data to show"
            })
        }

        res.status(200).json({
            success: true,
            users,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

// get single user
exports.getSingleUser = async (req, res) => {
    try {
      const users = await User.findById(req.params.id);
      if (!users) {
        return res.status(400).json({
          success: false,
          message: "There is No Data to show",
        });
      }
  
      res.status(200).json({
        success: true,
        users,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

// Update Single Users
exports.updateUser = async (req, res) => {
    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            dob: req.body.dob,
            country: req.body.country,
        }

        const Updateduser = await User.findByIdAndUpdate(req.params.id, user);
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "There is No Users"
            })
        }

        res.status(200).json({
            success: true,
            Updateduser
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}