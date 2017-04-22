var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cancionSchema = new Schema({
    nombre: { type: String, required: true },
    autor: { type: String },
    tags: { type: String },
    url: { type: String, required: true },
    playlist: { type: Schema.Types.ObjectId, ref: 'Playlist' }
});

module.exports = mongoose.model('Cancion', cancionSchema);
