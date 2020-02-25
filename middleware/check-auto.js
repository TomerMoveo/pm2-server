const jwt = require('jsonwebtoken');

// ## Our Middleware function:  --> export to other functions in the routes
function authenticationToken (req, res, next) {
    // Taking the token from the header - from the authorization part 
    const authHeader = req.headers['authorization']
    // If we had header...
    // Taking the token part - after the word "Bearer" word
    const token = authHeader && authHeader.split(' ')[1]
    // If the token is empty... return  -- 401 Unauthorized Error -- 
    if (token == null) return res.sendStatus(401)
    // Make sure this token is true - taking a call_back = error + our admin
    jwt.verify(token, process.env.ACESS_TOKEN_SECRET, (err, admin) => {
        // Although you have a token... is it valid? do you have access?
        if (err) return res.sendStatus(403)
        // If it is a valid token -->
        req.admin = admin
        next()
    })
}

module.exports = {
    authenticationToken
}
    