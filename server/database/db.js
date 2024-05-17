import mongoose from 'mongoose';


const Connection=()=>{
    const DB_URI=`mongodb+srv://new:1234567890@gmailclone.mqpsink.mongodb.net/`;
    try{
        mongoose.connect(DB_URI,{useNewUrlParser:true});
        console.log('DB connected successfully');
    }catch(error){
        console.log('Error while connecting with database',error.message);
    }
}

export default Connection;