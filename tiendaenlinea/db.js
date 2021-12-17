const { Sequelize } = require('sequelize');

// Importing models
const Product = require('./models/Product');
const Review = require('./models/Review');
const Order = require('./models/Order');
const User = require('./models/User');

// Database connection
const sequelize = new Sequelize('tienda_linea', 'smendieta', 'a1b2c3', {
  host: '192.168.0.5',
  dialect: 'mariadb',
  logging: false,
});

// Getting models
const models = [
  Product,
  Review,
  Order,
  User
];

// Registering models into Sequelize
for (let model of models) {
  model(sequelize);
}

// Configuring relations
const { products, reviews, users, orders } = sequelize.models;
// Relation one-to-one in reviews and orders table
reviews.belongsTo(products);

orders.belongsTo(products);
orders.belongsTo(users);

// example:
//products.belongsTo(users);


module.exports = sequelize;