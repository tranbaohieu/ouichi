const UserModel = require('../models/user');
const User = new UserModel

let register = (req, res) => {
    console.log(req.body)
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
        console.log(req.body)
        User.getByEmail(email, async (err, data) => {
            if (err) {res.status(500).send({ success: 0, err })
            console.log(email)
        }
            else {
                var user = data.rows[0]
                if (!user) res.status(500).send({ success: 0, error: 'Email not found' })
                else {
                    if (passwords === user.passwords) {
                        res.status(200).send({ success: 1, userName: data.rows[0]})
                        console.log(data.rows[0].email)
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

let updateRoom = (req, res) => {
    try {
        var { email, size, title, detail_link, image } = req.body;
        var user = {
            email: email,
            image: image,
            title: title,
            size: size,
            detail_link: detail_link
        }
        console.log(req.body)
        console.log(user)
        User.updateRoom(user, async (err, data) => {
            if (err) {res.status(500).send({ success: 0, err })
            console.log(email)
        }
            else {
                if (!user) res.status(500).send({ success: 0, error: 'Email not found' })
                else res.status(200).send({ success: 1})
            }
        })
    }
    catch {
        return res.status(500).json(error);
    }
}

module.exports = {
    register, login, updateRoom
}
