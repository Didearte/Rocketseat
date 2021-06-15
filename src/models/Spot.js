const mongoose = require ('mongoose');

const SpotSchema = new mongoose.Schema({
    Thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
       type: monggose.Schema.Types.ObjectId,
       ref: 'User' 
    }

});

module.exports = mongoose.model('User', UserSchema);