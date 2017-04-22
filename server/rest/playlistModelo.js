var db = require('./../database');

function PlaylistModelo() {}
PlaylistModelo.prototype.listar = function(parametros) {
    parametros = parametros || {};
    return db.playlist.find(parametros).populate('autor').exec();
};

PlaylistModelo.prototype.crear = function(data) {
    return db.playlist.create(data);
};

PlaylistModelo.prototype.actualizar = function(id, data) {
    return db.playlist.findOneAndUpdate({
        _id: id
    }, data, { new: true }).exec();
};

PlaylistModelo.prototype.eliminar = function(id) {
    return db.playlist.findOneAndRemove({ _id: id}).exec();
}

module.exports = new PlaylistModelo();