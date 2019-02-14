const mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const user = "raviteja";
const pwd = "12345";
const database ="ExpressMongoDB";

try {
    //Atlas: mongodb+srv://${user}:${pwd}@cluster0-4tlr7.mongodb.net/${database}?retryWrites=true1
    mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true });
} catch (e) {
    console.log("***")
}

let UsersSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required:true,
        unique: true
    }
});

module.exports = mongoose.model("Users", UsersSchema);

    