const Room = require('../models/room');
const RoomModel = require('../models/room');
const room = new RoomModel

let index =(req,res)=>{
    room.getAll((err,data)=>{
        if(err) res.status(500).send({success:0})
        else{
            res.status(201).send({success:1, rooms: data.rows})
        }
    })
}


module.exports = {
    index 
}
