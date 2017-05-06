var cbs = require('./../lib/callbacks');
var express = require('express');
var cancionRest = express();
var cancionModelo = require('./cancionModelo');

cancionRest.get('', function(req, res) {
    cancionModelo.listar(req.query)
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

cancionRest.get('/entrada/:idEntrada', function(req, res) {
    cancionModelo.listar({ entrada: req.params.idEntrada })
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

cancionRest.get('/:id', function(req, res) {
    cancionModelo.listar({ _id: req.params.id })
        .then(function (cancions) {
            if (cancions && cancions.length) {
                res.json(cancions[0]);
            } else {
                res.json(null);
            }
        }, cbs.devolerError(res, 500));
});

cancionRest.post('', function(req, res) {
    cancionModelo.crear(req.body)
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

cancionRest.put('/:id', function(req, res) {
    cancionModelo.actualizar(req.params.id, req.body)
        .then(
            cbs.devolverParametro(res), 
            cbs.devolerError(res, 500)
        );
});

cancionRest.delete('/:id', function(req, res) {
    cancionModelo.eliminar(req.params.id).then(function () {
        res.json({ status: 'ok' });
    }, cbs.devolerError(res, 500));
});

module.exports = cancionRest;