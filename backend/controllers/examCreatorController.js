//create the functions needed for everyone as in general in data retrieval, manipulation and deletion from the database


const User = require("../models/userModel");


exports.login = async (req, res) => {
  const  username  = req.body.username;
   console.log(req.body.username);
  

  try {
    // Find the user based on the provided username
    const user = await User.findOne({username});
    console.log(user);
    

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create a simple session for the user
    req.session.user = user;
    res.json({ user});
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
    console.log(error);
  }
};
