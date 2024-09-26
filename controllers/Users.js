const User = require('../models/Users');




exports.addUser = async (req,res) => {
    const {name, email, phone, password,role} = req.body;
    try{
        const existingEmail = await User.findOne({email});
        const existingphone = await User.findOne({phone});
        if(existingEmail || existingphone){
            return res.status(400).json({message: 'User already exists'});
        }
        const newUser = new User({name, email, phone, password, role});
        await newUser.save();
        res.redirect('/');
    } catch(error){
        console.log(error);
        res.render('addUser');
    }
} 

exports.editUser= async (req,res)=>{
    const id = req.params.id;
    const {name, email, phone, password, role} = req.body;
    const user = await User.findByIdAndUpdate(id,{name,email,phone,password,role});
    res.redirect('/')
}

exports.deleteUser = async (req,res)=>{
    const id = req.params.id;
    const user = await User.findByIdAndDelete(id);
    res.redirect('/');
}