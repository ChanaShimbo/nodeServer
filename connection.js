const mongoose = require('mongoose');
// mongoose.set('useFindAndModify', false);
class db{

    connectToMongo(){ 
        const connectionParams={
            useNewUrlParser:true,
            useUnifiedTopology:true,

        }
        let url= "mongodb://localhost:27017/Furniture";
            mongoose.connect(url,connectionParams).then((connection)=>
            {
            //    autoIncrement.initialize(connection);

                console.log("db Connected");
            }
            ).catch((err)=>{
                console.log(err);
                console.log("error connecting!");
        })
            }

    getDb(){
        return this.db;
    }
}

module.exports = new db();




