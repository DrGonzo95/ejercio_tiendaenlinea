const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos MongoDB con Mongoose
mongoose.connect('mongodb://localhost/tienda_en_linea', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conectado a MongoDB');
});

// Middlewares
app.use(bodyParser.json());

// Rutas
const productosRouter = require('./routes/productos');
//const categoriasRouter = require('./routes/categorias');
const clientesRouter = require('./routes/clientes'); // Agregado
const pedidosRouter = require('./routes/pedidos');

app.use('/productos', productosRouter);
//app.use('/categorias', categoriasRouter);
app.use('/clientes', clientesRouter);
app.use('/pedidos', pedidosRouter);

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});