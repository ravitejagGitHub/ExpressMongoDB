const mongoose= require("mongoose");

const server = "127.0.0.1:27017";
const user = "raviteja";
const pwd = "12345";
const database ="ExpressMongoDB";

try {
    //Atlas: mongodb+srv://${user}:${pwd}@cluster0-4tlr7.mongodb.net/${database}?retryWrites=true1
    mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true , useCreateIndex: true});
} catch (e) {
    console.log("***")
}

const db= mongoose.connection;
db.on('error', (err)=>{
    console.log(err);
});

db.once('open', ()=>{
    console.log('Database Connection is Established!');  
})