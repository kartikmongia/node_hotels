const mongoose =require('mongoose');

// define the mongodb connection URL
const mongoURL='mongodb://localhost:27017/hotels'


// set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true

})


const db=mongoose.connection;



db.on('connected',() =>{
    console.log('connected to MongoDB server');

});
db.on('error',(err) =>{
    console.error(' MongoDB connection error',err);

});
db.on('disconnected',() =>{
    console.log('MongoDB disconnected');

});


module.exports=db;