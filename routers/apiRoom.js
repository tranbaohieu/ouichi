const express = require('express');
const apiRoom = express.Router();
const roomController = require('../controllers/roomController')


apiRoom.get('/', (req,res)=>{roomController.index(req,res)})
apiRoom.post('/getRooms', (req,res)=>{roomController.getRooms(req,res)})
apiRoom.post('/updateRooms', (req,res)=>{roomController.updateRooms(req,res)})

module.exports = apiRoom;
