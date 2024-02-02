const Pedido = require('../models/pedido');

exports.getAll = async(req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async(req, res) => {
    try {
        const nuevoPedido = await Pedido.create(req.body);
        res.status(201).json(nuevoPedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};