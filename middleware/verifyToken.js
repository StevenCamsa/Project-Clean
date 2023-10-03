//verify token
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
    const auth = req.headers['authorization'];

    if (typeof auth !== 'undefined') {
        const bearer = auth.split(' ');
        const bearertoken = bearer[1];

        jwt.verify(bearertoken, 'secretkey', (err) => {
            if (err) {
                console.log("Invalid Token");
                res.status(403).send("Invalid Token");
            } else {
                next();
            }
        })
   
    } else {
        res.sendStatus(403);
    }
  };
  

module.exports = verifyToken