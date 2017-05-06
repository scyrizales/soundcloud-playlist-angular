var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playlistSchema = new Schema({
    nombre: { type: String, required: true },
    imagen: { type: String }
});

module.exports = mongoose.model('Playlist', playlistSchema);
