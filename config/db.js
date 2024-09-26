const mongoose = require('mongoose');
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
       
        console.log('Mongo Is Live');
    }catch(error){
        console.error(`Error: ${error.message}`);
    }
};
module.exports = connectDB;