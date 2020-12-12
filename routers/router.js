const express = require('express');
const router = express.Router();
const authRouter = require('./apiAuth');
const roomRouter = require('./apiRoom');

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use('/auth', authRouter)
router.use('/room', roomRouter)

module.exports = router;