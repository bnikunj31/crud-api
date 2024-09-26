const express = require('express');
const router = express.Router();
const controller = require('../controllers/Users')
const User = require('../models/Users');

router.get('/', async (req,res)=> {
    try {
        const users = await User.find().lean();
        res.render('showUser', { users });
    }catch(error){
        res.status(500).send({ message: error.message });
    }
});
router.get('/addUsers', (req,res)=> res.render('addUser'));
router.post('/adduser', controller.addUser);
router.get('/editUsers/:id', async (req,res)=> {
    try{
        const id = req.params.id;
        const user = await User.findById(id, req.body, {new: true});
        res.render('editUser',{user});
    }catch(error){
        console.error(error);
    }
});
router.post('/edit/:id', controller.editUser);
router.get('/deleteUsers/:id', controller.deleteUser)

module.exports = router;