const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const jwt = require('jsonwebtoken');

// Indicar por linea que es lo que esta haciendo este código

router.post('/login', async (req, res) => {
  const { body } = req;

  // Se busca al usuario que tenga el correo enviado
  const user = await sequelize.models.users.findOne({
    where: {
      email: body.email
    }
  });

  // Si el usuario no existe se manda el mensaje de error
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized'});
  }

  // se valida que coincida con la contraseña ingresada
  if (!user.validPassword(body.password)) {
    return res.status(401).json({ message: 'Invalid credentials'});
  }

  // dado que el usuario esta autorizado se procede a crear token 
  // Generate a token jsonwebtoken
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRETKEY, {
    expiresIn: process.env.JWT_EXPIRESIN,
  });

  // Se envia el token al cliente
  return res.json({
    message: 'Authenticated sucessfully',
    token,
  });
});

router.post('/signup', async (req, res) => {
  const { body } = req;

  // Se busca si ya hay otro usuario que tenga el mismo correo
  let user = await sequelize.models.users.findOne({
    where: {
      email: body.email
    }
  });
 
  // Si existe el usuario el usuario no se puede crear dado que ya existe
  // Validation for known is the user's email exists
  if (user) {
    return res.status(400).json({ message: 'this email is already registered' });
  }

  // Se crea el usuario con los datos enviados
  // Creating the user
  const user = await sequelize.models.users.create({
    name: body.name,
    lastname: body.lastname,
    email: body.email,
    type: 'client',
    password: body.password,
  });

  // Se guarda el usuario
  await user.save();

  // Se retorna que el usuario ha sido creado
  return res.json({ message: 'Your account was create successfully' });
});

module.exports = router;