const mongoose = require("mongoose");

const connectToDB = async () => {
    mongoose.connect("mongodb+srv://yokesh:yokesh123@apidev.e8ljl.mongodb.net/moviesuggest?retryWrites=true&w=majority", {
        useNewUrlParser: true,
     // useFindAndModify: false,
        useUnifiedTopology: true,
    });
}

module.exports = connectToDB;