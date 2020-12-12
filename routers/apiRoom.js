const express = require('express');
const apiRoom = express.Router();
const roomController = require('../controllers/roomController')


apiRoom.get('/', (req,res)=>{roomController.index(req,res)})

module.exports = apiRoom;
