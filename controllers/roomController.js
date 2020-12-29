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

let getSavedRoom =(req,res)=>{
    var { email } = req.body;
    console.log(req.body)
    room.getSavedRoom(email, async (err, data) =>{
        if (err) res.status(500).send({success:0})
        else {
            res.status(201).send({success:1, rooms: data.rows})
        }
    })
}

let checkSavedRoom=(req,res)=>{
    var {email, detail_link} = req.body;
    console.log(req.body);
    var del_room = {
        email: email,
        detail_link: detail_link
    }
    room.checkSavedRoom(del_room, async (err, data)=>{
        if (data.rows[0].count == "0") res.status(500).send({success: false})
        else{
            res.status(201).send({success: true})
        }
    })
}

let dropSavedRoom=(req,res)=>{
    var {email, detail_link} = req.body;
    console.log(req.body);
    var del_room = {
        email: email,
        detail_link: detail_link
    }
    room.dropSavedRoom(del_room, async (err, data)=>{
        if (err) res.status(500).send({success:false})
        else{
            res.status(201).send({success:true})
        }
    })
}

module.exports = {
    index, getSavedRoom, checkSavedRoom, dropSavedRoom
}
