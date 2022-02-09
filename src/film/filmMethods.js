const mongoose = require('mongoose');

const FilmModel = require('./filmModel')


exports.addFilm = async (newFilm) => {
    try {
        let movie = new FilmModel(newFilm)
        await movie.save()
        console.log('Film created')
    } catch (error) {
        console.log(error)
    }
}

exports.list = async () => {
    try {
        let results = await FilmModel.find({});
        console.log(results);
    } catch (error) {
        console.log(error)
    }
}

exports.deleteFilm = async (requestObj) => {
    try {
        console.log(requestObj);
        await FilmModel.findOneAndDelete(requestObj);
        console.log("delete request submited");
    } catch (error) {
        console.log(error);
    }
};

exports.updateFilm = async (requestObj, updateObj) => {
    try {
        console.log(requestObj, updateObj);
        const res = await FilmModel.updateOne(requestObj, updateObj);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

exports.findFilm = async (requestObj) => {
    try {
        let results = await FilmModel.find(requestObj);
        console.log(results);
    } catch (error) {
        console.log(error);
    }
    mongoose.connection.close()
};
