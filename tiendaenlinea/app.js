const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');

// Basic configuration
app.use(helmet());
app.use(cors);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));

app.listen(3001, () => {
  console.log(`Express on port 3001`);
});

// Postwork investigar estas helmet, cors, bcrypt, jsonwebtoken 

// Usuario type Cliente y Admin
// Registro y login == Seguridad
// Productos
// Reseñas
// Ordenes de compras

// Rutas y Modelos

// Retos - Crear rutas