const express = require('express');
const router = express.Router();
const authController = require('../controllers/examCreatorController');

// Login route
router.post('/ExamCreatorloginsample', authController.login);
// router.get('/userBYusername', authController.login);
// router.get('/login', (req, res) => {
//     // Handle the GET request, e.g., render a login form
//     res.send('This is the login form');
//   });
module.exports = router;
