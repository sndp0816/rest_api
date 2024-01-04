const mongoose = require("mongoose");

const URL = "mongodb+srv://sndp:sndp1234@testing.s5qyb6c.mongodb.net/?retryWrites=true&w=majority";

//this is not necessary in new version
const connectionParams={
     useNewUrlParser: true,
     useCreateIndex: true,
     useUnifiedTopology: true 


};
mongoose.connect(URL)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    });

    