require('dotenv').config();
const { Sequelize } = require('sequelize');
const models = require('../models');

initialize();

async function initialize() {
  const sequelize = new Sequelize(
    `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/postgres`,
    {
      dialect: 'postgres',
      logging: false,
    }
  );

  try {
    await sequelize.authenticate();
    console.log('Conexión a PostgreSQL establecida con éxito');

    await sequelize.query(`
      DO $$ 
      BEGIN 
        IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = '${process.env.DB_DATABASE}') THEN 
          CREATE DATABASE "${process.env.DB_DATABASE}"; 
        END IF; 
      END 
      $$;
    `);
    console.log(`Base de datos "${process.env.DB_DATABASE}" creada o ya existe`);

    await models.sequelize.sync({ alter: true });

  } catch (error) {
    console.error('Error al conectar a PostgreSQL:', error);
  }
}
