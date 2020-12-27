const Room = require('../models/room');
const RoomModel = require('../models/room');
const UserModel = require('../models/user');
const room = new RoomModel
const User = new UserModel

let index =(req,res)=>{
    room.getAll((err,data)=>{
        if(err) res.status(500).send({success:0})
        else{
            res.status(201).send({success:1, rooms: data.rows})
        }
    })
}

let getRooms = (req, res) => {
    try{
        var { email, passwords} = req.body;
        var user = {
            email : email,
            passwords : passwords
        }
        User.getRoomsByUser(user,(err,data)=>{
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

let updateRooms = (req, res) => {
    try{
        var { email, passwords, rooms} = req.body;
        var user = {
            email : email,
            passwords : passwords,
            rooms: rooms
        }
        User.updateRooms(user, (err,data)=>{
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

module.exports = {
    index , getRooms, updateRooms
}
