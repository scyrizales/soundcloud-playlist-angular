var cbs = require('./../lib/callbacks');
var express = require('express');
var playlistRest = express();
var playlistModelo = require('./playlistModelo');

playlistRest.get('', function(req, res) {
    playlistModelo.listar()
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

playlistRest.get('/:id', function(req, res) {
    playlistModelo.listar({ _id: req.params.id })
        .then(function (playlists) {
            if (playlists && playlists.length) {
                res.json(playlists[0]);
            } else {
                res.json(null);
            }
        }, cbs.devolerError(res, 500));
});

playlistRest.post('', function(req, res) {
    req.body.autor = req.session.usuario._id;
    playlistModelo.crear(req.body)
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

playlistRest.put('/:id', function(req, res) {
    req.body.autor = req.body.autor.id;
    playlistModelo.actualizar(req.params.id, req.body)
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

playlistRest.delete('/:id', function(req, res) {
    playlistModelo.eliminar(req.params.id).then(function () {
        res.json({ status: 'ok' });
    }, cbs.devolerError(res, 500));
});

module.exports = playlistRest;