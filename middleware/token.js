const jwt = require('jsonwebtoken')

function generateToken({ result }) {
    const jsonwebtoken = jwt.sign({ result }, 'secretkey', { expiresIn: '1h' })
    return jsonwebtoken
}



module.exports = generateToken