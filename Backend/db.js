const mongoose=require('mongoose')
const mongoURI="mongodb+srv://GouravChaki:Gourav@cluster0.ifo2taa.mongodb.net/collab"
const connectmonngo= ()=>{
        mongoose.connect(mongoURI,()=>{
            console.log('Connected to mongodb')
        })
}
module.exports=connectmonngo;