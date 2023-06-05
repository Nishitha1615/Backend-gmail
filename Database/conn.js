import mongoose from "mongoose"

const Connection=()=>{
    try{
        mongoose.connect('mongodb+srv://abimeeraperumal10:Jj2sJvpQvSegG4m8@nishitha.8jv94cv.mongodb.net/GmailClone',{useUnifiedTopology: true,useNewUrlParser:true});
        console.log("DB CONNECTED");
    }
    catch(e){
        console.log('Not Connected',e.message)
    }
}

export default Connection;