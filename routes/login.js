require('dotenv').config()
const express = require('express');
let router = express.Router();
const jwt = require('jsonwebtoken');

router.use(express.json())

// ## Create new token
router
    .route('/')
    .post((req, res) => {
        // Getting the req body from the client...
        const email = req.body.email
        const password = req.body.password
            // If the details above match 
            if (email == "tomer@moveo.group" && password == "Aa123456") {
                const admin = { email, password }
                // This is my new token - based on "admin & TOKEN_SECRET"
                const accessToken = jwt.sign( admin, process.env.ACESS_TOKEN_SECRET )
                res.json({accessToken : accessToken})
            }
            // If the details not match
            else {
                res.send("Access not allowed !")
            }
    })

module.exports = router



