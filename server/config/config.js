const mongoose = require("mongoose");

const DbConnection = async () =>{
    try {
        const url = process.env.MONGO_URI;
        const con = await mongoose.connect(url,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(
            `Mongodb DataBase Connected! ${con.connection.host}`
          );
    } catch (error) {
        console.log(`error: ${error.message}`);
    }
}

module.exports = DbConnection;