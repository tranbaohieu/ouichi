const express = require('express');
const apiAuth = express.Router();
const authController = require('../controllers/authController')


apiAuth.post('/register', (req,res)=>{authController.register(req,res)})
apiAuth.post('/login',(req,res)=>{authController.login(req,res)})
apiAuth.post('/updateRoom', (req, res)=>{authController.updateRoom(req,res)})

module.exports = apiAuth;
