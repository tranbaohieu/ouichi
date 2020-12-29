const express = require('express');
const apiRoom = express.Router();
const roomController = require('../controllers/roomController')


apiRoom.get('/', (req,res)=>{roomController.index(req,res)})
apiRoom.post('/getSavedRoom', (req, res)=>{roomController.getSavedRoom(req,res)})
apiRoom.post('/checkSavedRoom', (req, res)=>{roomController.checkSavedRoom(req,res)})
apiRoom.post('/dropSavedRoom', (req, res)=>{roomController.dropSavedRoom(req,res)})
module.exports = apiRoom;
