const UserModel = require('../models/user');
const User = new UserModel

let register = (req, res) => {
    try{
        var { email, passwords } = req.body;
        var user = {
            email : email,
            passwords : passwords
        }
        User.createNewUser(user,(err,data)=>{
            if(err) res.status(500).send({success: 0, message: "error"})
            else {
                res.status(201).send({success:1, user : user})
            }
        })
    }
    catch{
        return res.status(500).json(error);
    }
}

let login = (req, res) => {
    try {
        var { email, passwords } = req.body;
        User.getByEmail(email, async (err, data) => {
            if (err) res.status(500).send({ success: 0, err })
            else {
                var user = data.rows[0]
                if (!user) res.status(500).send({ success: 0, error: 'Email not found' })
                else {
                    if (passwords === user.passwords) {
                        res.status(200).send({ success: 1, userName: data.rows[0]})
                    }
                    else res.status(500).send({ success: 0, error: 'Password incorrect' })
                }
            }
        })
    }
    catch {
        return res.status(500).json(error);
    }
}

module.exports = {
    register, login
}
